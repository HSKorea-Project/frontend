"use client";

import { ReactNode } from "react";
import { css } from "@/styled-system/css";

// DetailInfoItem Props 타입 정의
interface DetailInfoItemProps {
  label: string;
  children: ReactNode;
  withBorder?: boolean;
}

// 문의 상세 정보 항목 컴포넌트
export default function DetailInfoItem({
  label,
  children,
  withBorder = true,
}: DetailInfoItemProps) {
  return (
    <div
      className={css({
        width: "100%",
        minHeight: "65px",
        borderBottom: withBorder ? "1px solid" : "none",
        borderBottomColor: "gray.300",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        paddingY: "12px",
        gap: "8px",
      })}
    >
      <span
        className={css({
          fontWeight: "regular",
          fontSize: "12px",
          color: "gray.500",
        })}
      >
        {label}
      </span>

      <span
        className={css({
          fontWeight: "medium",
          fontSize: "14px",
          color: "gray.800",
          whiteSpace: "pre-line",
          wordBreak: "keep-all",
        })}
      >
        {children}
      </span>
    </div>
  );
}
