import { Meta, StoryFn } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  mockQuery,
  mockQueryError,
  mockQueryLoading,
} from "@/lib/mocks/query-client-mock";
import { charactersMock } from "@/lib/mocks/characters.mock";
import { CharactersPage } from "./CharactersPage";

const meta = {
  component: CharactersPage,
} satisfies Meta<typeof CharactersPage>;

export default meta;

type Story = StoryFn<{ state: "loading" | "success" | "error" }>;

const Template: Story = (args) => {
  const { state } = args;

  let queryClient: QueryClient;

  switch (state) {
    case "loading":
      queryClient = mockQueryLoading(["getAllCharacters"]);
      break;
    case "success":
      queryClient = mockQuery(["getAllCharacters"], charactersMock);
      break;
    default:
      queryClient = mockQueryError(
        ["getAllCharacters"],
        new Error("Error loading characters")
      );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CharactersPage />
    </QueryClientProvider>
  );
};

export const Loading = Template.bind({});
Loading.args = {
  state: "loading",
};

export const Success = Template.bind({});
Success.args = {
  state: "success",
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  state: "error",
};
