import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

// 기본(초록)
export const Primary: Story = {
  args: {
    content: "학교이사",
  },
};

// 회색
export const Gray: Story = {
  args: {
    content: "미포함",
    type: "gray",
  },
};

// 작은 사이즈
export const Small: Story = {
  args: {
    content: "NEW",
    type: "primary",
    size: "small",
  },
};
