import { css } from "@/styled-system/css";

// Radio Props 타입 정의
interface RadioProps {
  checked: boolean;
  label: string;
  onClick: () => void;
}

// Radio 컴포넌트
export default function Radio({ checked, label, onClick }: RadioProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css({
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      })}
    >
      {/* 원 */}
      <div
        className={css({
          width: "16px",
          height: "16px",
          borderRadius: "full",
          border: "1px solid",
          borderColor: checked ? "orange.500" : "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        {checked && (
          <div
            className={css({
              width: "10px",
              height: "10px",
              borderRadius: "full",
              bg: "orange.500",
            })}
          />
        )}
      </div>

      {/* 텍스트 */}
      <span
        className={css({
          fontSize: "12px",
          color: "gray.700",
        })}
      >
        {label}
      </span>
    </button>
  );
}
