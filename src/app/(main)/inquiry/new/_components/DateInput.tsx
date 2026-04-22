"use client";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { format, isSameDay, startOfDay } from "date-fns";
import { css } from "@/styled-system/css";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/calendar.css";
import Icon from "@/components/ui/Icon/Icon";
import { forwardRef } from "react";

interface DateInputProps {
  label?: string;
  required?: boolean;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}

const CustomInput = forwardRef<
  HTMLDivElement,
  { value?: string | null; onClick?: () => void; placeholder?: string }
>(({ value, onClick, placeholder = "이사 예정일 입력" }, ref) => {
  const hasValue = !!value && value.trim().length > 0;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: "16px",
        py: "12px",
        fontSize: "12px",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "gray.300",
        cursor: "pointer",
        bg: "white",
        _hover: {
          borderColor: "orange.400",
        },
      })}
    >
      <span
        className={css({
          color: hasValue ? "gray.900" : "gray.500",
        })}
      >
        {hasValue ? value : placeholder}
      </span>

      <Icon name="calendar" />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default function DateInput({
  label,
  required,
  value,
  onChange,
  placeholder = "이사 예정일 입력",
}: DateInputProps) {
  const today = startOfDay(new Date());

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      {/* 라벨 */}
      {label && (
        <label
          className={css({
            display: "flex",
            gap: "4px",
            fontSize: "12px",
            color: "gray.700",
            marginBottom: "8px",
          })}
        >
          {label}
          {required && <span className={css({ color: "orange.400" })}>*</span>}
        </label>
      )}

      <DatePicker
        selected={value}
        onChange={onChange}
        minDate={today}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        calendarClassName="custom-calendar"
        popperPlacement="bottom"
        customInput={<CustomInput placeholder={placeholder} />}
        // 날짜 스타일
        dayClassName={(date) => {
          const classes = [];

          if (isSameDay(date, new Date())) {
            classes.push("custom-today");
          }

          if (value && isSameDay(date, value)) {
            classes.push("custom-selected");
          }

          return classes.join(" ");
        }}
        // 헤더
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            })}
          >
            <button type="button" onClick={decreaseMonth}>
              <Icon name="left-calendar" />
            </button>

            <span
              className={css({
                fontWeight: "semibold",
                fontSize: "12px",
                color: "gray.900",
              })}
            >
              {format(date, "yyyy년 M월", { locale: ko })}
            </span>

            <button type="button" onClick={increaseMonth}>
              <Icon name="right-calendar" />
            </button>
          </div>
        )}
      />
    </div>
  );
}
