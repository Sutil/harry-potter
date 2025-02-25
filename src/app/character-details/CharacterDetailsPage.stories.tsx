import { Meta, StoryFn } from "@storybook/react";
import { CharacterDetailsPage } from "./CharacterDetailsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  mockQuery,
  mockQueryError,
  mockQueryLoading,
} from "@/lib/mocks/query-client-mock";
import { charactersMock } from "@/lib/mocks/characters.mock";

const meta = {
  component: CharacterDetailsPage,
} satisfies Meta<typeof CharacterDetailsPage>;

export default meta;

type Story = StoryFn<{ state: "loading" | "success" | "error" }>;

const Template: Story = (args) => {
  const { state } = args;

  let queryClient: QueryClient;

  switch (state) {
    case "loading":
      queryClient = mockQueryLoading(["getCharacterById", undefined]);
      break;
    case "success":
      queryClient = mockQuery(
        ["getCharacterById", undefined],
        charactersMock[0]
      );
      break;
    default:
      queryClient = mockQueryError(
        ["getCharacterById", undefined],
        new Error("Error loading character")
      );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CharacterDetailsPage />
    </QueryClientProvider>
  );
};

export const Loading: Story = Template.bind({});
Loading.args = {
  state: "loading",
};

export const Success: Story = Template.bind({});
Success.args = {
  state: "success",
};

export const ErrorState: Story = Template.bind({});
ErrorState.args = {
  state: "error",
};
