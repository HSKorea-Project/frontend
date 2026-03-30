import { Meta, StoryObj } from "@storybook/nextjs-vite";
import CheckBox from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "UI/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

// 체크 전
export const Before: Story = {
  args: {
    checked: false,
  },
};

// 체크 후
export const After: Story = {
  args: {
    checked: true,
  },
};
