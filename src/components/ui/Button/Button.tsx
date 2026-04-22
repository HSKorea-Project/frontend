import { css } from "@/styled-system/css";
import { ButtonHTMLAttributes, ReactNode } from "react";

// 버튼 props 타입 정의
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline"; // 스타일 유형
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

// 버튼 컴포넌트
export default function Button({
  children,
  variant = "primary",
  disabled,
  fullWidth = false,
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${css({
        width: fullWidth ? "100%" : "auto",
        minWidth: "32px",
        px: "16px",
        py: "12px",
        borderRadius: "lg",
        fontWeight: "regular",
        cursor: "pointer",
        fontSize: "12px",

        ...(variant === "primary" && {
          bg: "orange.400",
          color: "white",
          _hover: {
            bg: "orange.500",
          },
        }),

        ...(variant === "secondary" && {
          bg: "gray.600",
          color: "white",
          _hover: {
            bg: "gray.700",
          },
        }),

        ...(variant === "outline" && {
          bg: "white",
          border: "1px solid",
          borderColor: "gray.300",
          color: "gray.700",
          _hover: {
            bg: "gray.100",
          },
        }),

        ...(disabled && {
          bg: "gray.200",
          cursor: "not-allowed",
          _hover: {
            bg: "gray.400",
          },
        }),
      })} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
