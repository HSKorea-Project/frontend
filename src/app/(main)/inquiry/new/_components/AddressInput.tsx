"use client";

import Script from "next/script";
import Input from "@/components/ui/Input/Input";
import { css } from "@/styled-system/css";
import Button from "@/components/ui/Button/Button";
import { DaumPostcodeData } from "../_types/daum-postcode";

// 주소 Input Props 타입 정의
interface AddressInputProps {
  label: string;
  value: string;
  detailValue: string;
  onChange: (v: string) => void;
  onDetailChange: (v: string) => void;
  required?: boolean;
}

// 주소 입력 Input 컴포넌트
export default function AddressInput({
  label,
  value,
  detailValue,
  onChange,
  onDetailChange,
  required,
}: AddressInputProps) {
  // 다음 주소 검색 팝업을 여는 함수
  const handleOpenAddressSearch = () => {
    if (!window.daum?.Postcode) {
      alert("주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data: DaumPostcodeData) => {
        const selectedAddress =
          data.userSelectedType === "R" ? data.roadAddress : data.jibunAddress;

        onChange(selectedAddress);
      },
    }).open();
  };

  return (
    <>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive"
      />

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        })}
      >
        {/* 주소 */}
        <div
          className={css({
            display: "flex",
            gap: "8px",
            alignItems: "end",
          })}
        >
          <div
            className={css({
              flex: "1",
            })}
          >
            <Input
              value={value}
              onChange={(e) => onChange(e.target.value)}
              label={label}
              required={required}
              placeholder="주소 검색"
              readOnly
              onClick={handleOpenAddressSearch}
            />
          </div>

          <Button type="button" onClick={handleOpenAddressSearch}>
            주소 검색
          </Button>
        </div>

        {/* 상세주소 */}
        <Input
          value={detailValue}
          onChange={(e) => onDetailChange(e.target.value)}
          placeholder="상세주소 입력 (선택)"
        />
      </div>
    </>
  );
}
