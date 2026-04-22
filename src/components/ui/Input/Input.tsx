import { css } from "@/styled-system/css";
import { InputHTMLAttributes } from "react";
import Icon from "@/components/ui/Icon/Icon";

// Input props 타입 정의
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean; // 필수 기호 여부
  error?: string; // 에러 메세지
}

// Input 컴포넌트
export default function Input({ label, required, error, ...props }: InputProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "100%",
        gap: "8px",
      })}
    >
      {/* 라벨 */}
      {label && (
        <label
          className={css({
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            fontSize: "12px",
            fontWeight: "regular",
            color: "gray.700",
          })}
        >
          {label}
          {required && (
            <span
              className={css({
                color: "orange.400",
              })}
            >
              *
            </span>
          )}
        </label>
      )}

      {/* Input */}
      <input
        {...props}
        className={css({
          px: "16px",
          py: "12px",
          fontSize: "12px",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: error ? "error.500" : "gray.300",

          outline: "none",
          transition: "all 0.2s",

          bg: props.disabled ? "gray.100" : "white",
          cursor: props.disabled ? "not-allowed" : "text",

          _placeholder: {
            color: "gray.500",
          },

          _focus: {
            borderColor: error ? "error.500" : "orange.400",
            boxShadow: error ? "0 0 0 3px rgba(224,82,82,0.2)" : "0 0 0 3px rgba(240,165,0,0.2)",
          },
        })}
      />

      {/* 에러 메시지 */}
      {error && (
        <span
          className={css({
            color: "error.500",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          })}
        >
          <Icon name="error" /> {error}
        </span>
      )}
    </div>
  );
}
