import { Meta, StoryObj } from "@storybook/react";
import { Character } from "@/lib/models/character.model";
import { NavMenu } from "./NavMenu";

const meta = {
  component: NavMenu,
} satisfies Meta<typeof NavMenu>;

export default meta;

type Story = StoryObj<{ character: Partial<Character> }>;

export const Default: Story = {};
