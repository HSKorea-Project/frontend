import { css } from "@/styled-system/css";
import { TextareaHTMLAttributes, useId } from "react";

// Textarea props 타입 정의
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
}

// Textarea 컴포넌트
export default function Textarea({ label, required, ...props }: TextareaProps) {
  const id = useId();

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
          htmlFor={id}
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

      {/* Textarea */}
      <textarea
        id={id}
        {...props}
        className={css({
          px: "16px",
          py: "12px",
          fontSize: "12px",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "gray.300",

          outline: "none",
          transition: "all 0.2s",

          _placeholder: {
            color: "gray.500",
          },

          _focus: {
            borderColor: "orange.400",
            boxShadow: "0 0 0 3px rgba(46,158,97,0.2)",
          },

          minHeight: "100px",
        })}
      />
    </div>
  );
}
