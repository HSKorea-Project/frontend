import { css } from "@/styled-system/css";
import { TextareaHTMLAttributes } from "react";

// Textarea props 타입 정의
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
}

// Textarea 컴포넌트
export default function Textarea({ label, required, ...props }: TextareaProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        width: "100%",
        gap: {
          base: "8px",
          // md: "8px",
        },
      })}
    >
      {/* 라벨 */}
      {label && (
        <label
          className={css({
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            fontSize: {
              base: "12px",
              // md: "16px",
            },
            fontWeight: "regular",
            color: "gray.700",
          })}
        >
          {label}
          {required && (
            <span
              className={css({
                color: "green.500",
              })}
            >
              *
            </span>
          )}
        </label>
      )}

      {/* Textarea */}
      <textarea
        {...props}
        className={css({
          px: {
            base: "16px",
            // md: "16px",
          },
          py: "12px",
          fontSize: {
            base: "12px",
            // md: "12px",
          },
          borderRadius: {
            base: "8px",
            // md: "8px",
          },
          border: "1px solid",
          borderColor: "gray.300",

          outline: "none",
          transition: "all 0.2s",

          _placeholder: {
            color: "gray.500",
          },

          _focus: {
            borderColor: "green.500",
            boxShadow: "0 0 0 3px rgba(46,158,97,0.2)",
          },

          minHeight: "100px",
        })}
      />
    </div>
  );
}
