import { css } from "@/styled-system/css";
import Icon from "@/components/ui/Icon/Icon";

// 체크박스 Props
interface CheckBoxProps {
  size?: number;
  checked: boolean;
  onClick?: () => void;
}

// 체크박스 컴포넌트
export default function CheckBox({ size = 20, checked, onClick }: CheckBoxProps) {
  return (
    <div
      onClick={onClick}
      className={css({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        width: `${size}px`,
        height: `${size}px`,

        borderRadius: "4px",
        border: checked ? "" : "1px solid black",
        bg: checked ? "orange.500" : "",
      })}
    >
      {checked && <Icon name="check" />}
    </div>
  );
}
