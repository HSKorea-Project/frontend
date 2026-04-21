"use client";

import { css, cx } from "@/styled-system/css";
import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/Icon/Icon";

interface Option {
  label: string;
  value: string;
}

// Dropdown Props 타입 정의
interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
}

// Dropdown 컴포넌트
export default function Dropdown({
  value,
  onChange,
  options,
  placeholder = "선택해주세요",
  className,
  label,
  required,
  disabled,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minWidth: "120px",
          gap: "8px",
        }),
        className
      )}
    >
      {/* 라벨 */}
      {label && (
        <label
          className={css({
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            fontSize: "12px",
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

      {/* 버튼 */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "16px",
          py: "12px",
          border: "1px solid",
          borderColor: "gray.300",
          borderRadius: "8px",
          bg: disabled ? "gray.100" : "white",
          cursor: "pointer",
        })}
        disabled={disabled}
      >
        <span
          className={css({
            color: value ? "gray.900" : "gray.500",
            fontSize: "12px",
          })}
        >
          {selected ? selected.label : placeholder}
        </span>

        <Icon name="down" />
      </button>

      {/* 드롭다운 */}
      {open && (
        <ul
          className={css({
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            mt: "4px",
            bg: "white",
            border: "1px solid",
            borderColor: "gray.300",
            borderRadius: "8px",
            zIndex: 10,
            overflow: "hidden",
            boxShadow: "0 0 32px 0 rgba(22, 23, 25, 0.1)",
          })}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={css({
                px: "16px",
                py: "12px",
                fontSize: "12px",
                cursor: "pointer",

                _hover: {
                  bg: "green.50",
                  color: "green.700",
                },

                bg: value === option.value ? "green.50" : "white",
                color: value === option.value ? "green.700" : "gray.900",
              })}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
