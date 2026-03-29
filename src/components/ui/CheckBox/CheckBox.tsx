import { css } from "@/styled-system/css";
import Icon from "@/components/ui/Icon/Icon";

// 체크박스 Props
interface CheckBoxProps {
  size?: number;
  checked: boolean;
}

// 체크박스 컴포넌트
export default function CheckBox({ size = 20, checked }: CheckBoxProps) {
  return (
    <div
      className={css({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        width: `${size}px`,
        height: `${size}px`,

        borderRadius: "4px",
        border: checked ? "" : "1px solid black",
        bg: checked ? "green.500" : "",
      })}
    >
      {checked && <Icon name="check" size={size} />}
    </div>
  );
}
