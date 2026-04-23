import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

// 스토리 메타 정보
const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

// 기본 버튼
export const Primary: Story = {
  args: {
    children: "확인",
    variant: "primary",
  },
};

// 회색 버튼
export const Secondary: Story = {
  args: {
    children: "확인",
    variant: "secondary",
  },
};

// 테두리 버튼
export const Outline: Story = {
  args: {
    children: "삭제하기",
    variant: "outline",
  },
};

// 흰색 버튼
export const White: Story = {
  args: {
    children: "문의하기",
    variant: "white",
  },
};

// 비활성화
export const Disabled: Story = {
  args: {
    children: "확인",
    disabled: true,
  },
};

// 전체 너비 버튼
export const FullWidth: Story = {
  args: {
    children: "견적문의",
    variant: "primary",
    fullWidth: true,
  },
};
