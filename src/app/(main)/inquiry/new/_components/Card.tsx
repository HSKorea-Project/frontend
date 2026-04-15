"use client";

import { css } from "@/styled-system/css";
import Icon from "@/components/ui/Icon/Icon";

// Card Props 타입 정의
interface CardProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
}

// Card 컴포넌트
export default function Card({ title, icon, children }: CardProps) {
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
          borderColor: "gray.200",
          pb: "12px",
        })}
      >
        <p
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontWeight: "bold",
            color: "green.700",
            fontSize: "16px",
          })}
        >
          {icon && <Icon name={icon} />}
          {title}
        </p>
      </div>

      {/* 내용 */}
      {children}
    </div>
  );
}
