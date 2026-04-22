"use client";

import { css } from "@/styled-system/css";

// Section Props 타입 정의
interface SectionProps {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}

// Section 컴포넌트
export default function Section({ title, icon: Icon, children }: SectionProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        padding: {
          base: "16px",
          md: "32px",
        },
        backgroundColor: "white",
        borderRadius: "16px",
        width: "100%",
        border: "1px solid",
        borderColor: "gray.200",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
      })}
    >
      {/* 헤더 */}
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          alignContent: "end",
          borderBottom: "1px solid",
          borderColor: "orange.500",
          pb: "12px",
        })}
      >
        <p
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            color: "orange.500",
            fontSize: "16px",
          })}
        >
          {Icon && <Icon width={16} height={16} />}
          {title}
        </p>
      </div>

      {/* 내용 */}
      {children}
    </div>
  );
}
