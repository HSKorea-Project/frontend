"use client";

import { css } from "@/styled-system/css";
import { useRef, useState } from "react";
import UploadIcon from "@/assets/svgs/upload.svg";

// Upload Props 타입 정의
interface UploadProps {
  label?: string;
  accept?: string;
  onChange?: (file: File | null) => void;
}

// Upload 컴포넌트
export default function Upload({
  label,
  accept = "application/pdf,image/*",
  onChange,
}: UploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;

    if (!selected) return;

    // 파일 타입 검증
    const isValid = selected.type === "application/pdf" || selected.type.startsWith("image/");

    if (!isValid) {
      alert("PDF 또는 이미지 파일만 업로드 가능합니다.");
      return;
    }

    setFile(selected);
    onChange?.(selected);

    // 같은 파일 다시 선택 가능하게
    e.target.value = "";
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
      })}
    >
      {/* 라벨 */}
      {label && (
        <p
          className={css({
            fontSize: "12px",
            fontWeight: "regular",
            color: "gray.700",
          })}
        >
          {label}
        </p>
      )}

      {/* 업로드 박스 */}
      <div
        onClick={handleClick}
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "8px",
          px: "16px",
          py: "12px",
          border: "2px dashed",
          borderColor: "orange.300",
          borderRadius: "8px",
          bg: "orange.50",
          cursor: "pointer",
          transition: "all 0.2s",

          _hover: {
            bg: "orange.100",
          },
        })}
      >
        {/* 선택된 파일 목록 */}
        {file ? (
          <>
            <span
              className={css({
                fontSize: "12px",
                color: "orange.700",
                fontWeight: "medium",
              })}
            >
              {file.name}
            </span>
          </>
        ) : (
          <>
            <UploadIcon />
            <span
              className={css({
                fontSize: "12px",
                color: "orange.500",
                fontWeight: "medium",
              })}
            >
              파일 선택하기
            </span>
          </>
        )}
      </div>

      {/* 파일 정보 */}
      <p
        className={css({
          fontSize: "10px",
          color: "gray.500",
        })}
      >
        PDF 파일 권장 · 최대 1개
      </p>

      {/* 숨겨진 input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
