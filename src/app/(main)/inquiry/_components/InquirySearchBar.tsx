import Button from "@/components/ui/Button/Button";
import { css } from "@/styled-system/css";
import { ChangeEvent } from "react";
import Search from "@/assets/svgs/search.svg";

// 검색바 props 타입 정의
interface InquirySearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

// 검색바 컴포넌트
export default function InquirySearchBar({ value, onChange }: InquirySearchBarProps) {
  // 검색 입력 이벤트 핸들러
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={css({
        display: "flex",
        border: "1.5px solid",
        borderColor: "gray.300",
        borderRadius: "6px",
        width: { base: "100%", md: "300px" },
        height: "fit",
        maxHeight: "40px",
      })}
    >
      <input
        value={value}
        onChange={handleInput}
        placeholder="고객사명 또는 고객명 검색"
        className={css({
          minWidth: "200px",
          width: { base: "100%" },
          padding: "12px 14px",
          color: "gray.600",
          fontSize: {
            base: "12px",
            md: "14px",
          },
          bg: "white",
          borderRadius: "5px 0px 0px 5px",
        })}
      />
      <Button
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0px 5px 5px 0px",
        })}
      >
        <Search />
      </Button>
    </div>
  );
}
