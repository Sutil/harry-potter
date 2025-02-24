import { Meta, StoryObj } from "@storybook/react";
import { Characters } from "./Characters";

const meta = {
  component: Characters,
} satisfies Meta<typeof Characters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {};
