import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./Input";

// 스토리 메타 정보
const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input>;

// 기본 Input
export const Primary: Story = {
  args: {
    label: "아이디",
    placeholder: "아이디를 입력하세요",
    required: true,
  },
};

// 에러 Input
export const Error: Story = {
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    required: true,
    error: "비밀번호가 일치하지 않습니다.",
  },
};
