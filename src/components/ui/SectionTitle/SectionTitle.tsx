import { css, cx } from "@/styled-system/css";
import { ReactNode } from "react";

// Section 제목 Props 타입 정의
interface SectionTitleProps {
  children: ReactNode;
  enTitle?: string;
  align?: "left" | "center";
  gap?: number;
  barWidth?: number;
  showBar?: boolean;
  color?: string;
  className?: string;
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
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",
          alignItems: isCenter ? "center" : "flex-start",
          rowGap: `${gap}px`,
          width: "fit-content",
        }),
        className
      )}
    >
      {/* 영어 타이틀 */}
      {enTitle && (
        <p
          className={css({
            fontWeight: "bold",
            fontSize: "12px",
            color: "orange.400",
            textAlign: isCenter ? "center" : "left",
          })}
        >
          {enTitle}
        </p>
      )}

      {/* 메인 타이틀 */}
      <h2
        className={css({
          fontSize: { base: "20px", md: "24px" },
          fontWeight: "bold",
          color,
          textAlign: isCenter ? "center" : "left",
        })}
      >
        {children}
      </h2>

      {/* 바 */}
      {showBar && (
        <div
          className={css({
            width: `${barWidth}px`,
            height: "3px",
            borderRadius: "full",
            bg: "orange.400",
          })}
        />
      )}
    </div>
  );
}
