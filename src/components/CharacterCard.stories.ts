import { Meta, StoryObj } from "@storybook/react";
import { CharacterCard } from "./CharacterCard";
import { Character } from "@/lib/models/character.model";

const meta = {
  component: CharacterCard,
} satisfies Meta<typeof CharacterCard>;

export default meta;

type Story = StoryObj<{ character: Partial<Character> }>;

export const Default: Story = {
  args: {
    character: {
      name: "Harry Potter",
      house: "Gryffindor",
      image: "https://ik.imagekit.io/hpapi/harry.jpg",
      hogwartsStudent: true,
    },
  },
};
