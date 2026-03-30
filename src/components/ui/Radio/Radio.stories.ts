import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Radio>;

// 선택
export const Checked = {
  args: {
    label: "포함",
    checked: true,
  },
};

// 미선택
export const Unchecked = {
  args: {
    label: "포함",
    checked: false,
  },
};
