"use client";

import { usePreventScroll } from "@/hooks/usePreventScroll";
import { css } from "@/styled-system/css";
import { ReactNode } from "react";

// BaseModal Props 타입 정의
type BaseModalProps = {
  children: ReactNode;
  onClose: () => void;
  closeOnClickOutside?: boolean;
};

// 기본 모달창 컴포넌트
export default function BaseModal({
  children,
  onClose,
  closeOnClickOutside = true,
}: BaseModalProps) {
  usePreventScroll(true);

  const handleClickOutside = () => {
    if (!closeOnClickOutside) return;
    onClose();
  };

  return (
    <div
      className={css({
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        display: "grid",
        gridTemplateColumns: "minmax(20px, 1fr) minmax(300px, 650px) minmax(20px, 1fr)",
        alignItems: "center",
        justifyItems: "center",
      })}
      onClick={handleClickOutside}
    >
      <div />
      <div
        className={css({
          width: "100%",
          maxWidth: "500px",
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "16px",
          border: "1px solid",
          borderColor: "gray.200",
          padding: {
            base: "24px",
            md: "24px",
          },
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
        })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
      <div />
    </div>
  );
}
