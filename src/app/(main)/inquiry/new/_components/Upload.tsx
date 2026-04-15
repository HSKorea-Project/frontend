"use client";

import { css } from "@/styled-system/css";
import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon/Icon";

// Upload Props 타입 정의
interface UploadProps {
  label?: string;
  accept?: string;
  maxFiles?: number;
}

// Upload 컴포넌트
export default function Upload({ label, accept = ".pdf", maxFiles = 1 }: UploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files ? Array.from(e.target.files) : [];

    if (selected.length > maxFiles) return;

    setFiles(selected);
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
          borderColor: "green.300",
          borderRadius: "8px",
          bg: "green.50",
          cursor: "pointer",
          transition: "all 0.2s",

          _hover: {
            bg: "green.100",
          },
        })}
      >
        <Icon name="upload" />

        <span
          className={css({
            fontSize: "12px",
            color: "green.700",
            fontWeight: "medium",
          })}
        >
          파일 선택하기
        </span>
      </div>

      {/* 파일 정보 */}
      <p
        className={css({
          fontSize: "10px",
          color: "gray.500",
        })}
      >
        PDF 파일 권장 · 최대 {maxFiles}개
      </p>

      {/* 선택된 파일 목록 */}
      {files.length > 0 && (
        <ul
          className={css({
            fontSize: "12px",
            color: "gray.700",
          })}
        >
          {files.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      )}

      {/* 숨겨진 input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={maxFiles > 1}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
