import { css } from "@/styled-system/css";
import { ReactNode } from "react";

// Section 제목 Props 타입 정의
interface SectionTitleProps {
  children: ReactNode;
  enTitle?: string;
  align: "left" | "center";
  gap?: number;
  barWidth?: number;
  showBar?: boolean;
  color?: "white" | "gray.900";
}

// Section 제목 컴포넌트
export default function SectionTitle({
  children,
  enTitle,
  align = "left",
  gap = 12,
  barWidth = 30,
  showBar = true,
  color = "gray.900",
}: SectionTitleProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        rowGap: `${gap}px`,
        alignItems: align,
        width: "fit",
      })}
    >
      {enTitle && (
        <p
          className={css({
            fontWeight: "bold",
            fontSize: "12px",
            color: "orange.400",
          })}
        >
          {enTitle}
        </p>
      )}
      <h2
        className={css({
          fontSize: "24px",
          fontWeight: "bold",
          color: color,
          textAlign: align,
        })}
      >
        {children}
      </h2>
      <div
        className={css({
          display: showBar ? "block" : "none",
          width: `${barWidth}px`,
          height: "3px",
          borderRadius: "full",
          bg: "orange.400",
        })}
      />
    </div>
  );
}
