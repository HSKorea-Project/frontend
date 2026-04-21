"use client";

import { css } from "@/styled-system/css";
import Section from "./Section";
import Input from "@/components/ui/Input/Input";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import Button from "@/components/ui/Button/Button";
import { formatPhoneNumber, onlyNumber } from "@/utils/format";
import { AGENCY } from "@/constants/Agency";
import { useEffect, useRef, useState } from "react";

// Customer Props 타입 정의
interface CustomerProps {
  clientCompany: string;
  setClientCompany: (v: string) => void;
  clientName: string;
  setClientName: (v: string) => void;
  agency: string;
  setAgency: (v: string) => void;
  clientContact: string;
  setClientContact: (v: string) => void;
  certification: string;
  setCertification: (v: string) => void;
}

// '고객 정보' 섹션 컴포넌트
export default function Customer({
  clientCompany,
  setClientCompany,
  clientName,
  setClientName,
  agency,
  setAgency,
  clientContact,
  setClientContact,
  certification,
  setCertification,
}: CustomerProps) {
  const [isVerified, setIsVerified] = useState(false); // 인증 완료 여부
  const [cooldown, setCooldown] = useState(0); // 남은 시간 (초)
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 인증 요청 로직: 재요청은 1분 후 가능
  const handleRequestCode = () => {
    if (!agency || !clientContact || cooldown > 0) return;

    // API 요청 추가 예정
    console.log("인증번호 요청");

    // 쿨타임 시작 (60초)
    setCooldown(10);

    timerRef.current = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 인증번호 확인
  const handleVerifyCode = () => {
    if (!certification) return;

    // API 검증 자리
    console.log("인증 확인");

    // 성공했다고 가정
    setIsVerified(true);

    // 타이머 정리
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <Section title="고객 정보" icon="user">
      {/* 고객사명 input */}
      <Input
        value={clientCompany}
        onChange={(e) => setClientCompany(e.target.value)}
        label="고객사명"
        required
        placeholder="회사명 또는 기관명을 입력하세요"
      />

      {/* 고객명 input */}
      <Input
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        label="고객명"
        required
        placeholder="담당자 이름을 입력하세요"
      />

      {/* 연락처 */}
      <div className={css({ display: "flex", flexDirection: "column", gap: "8px" })}>
        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            gap: "8px",
            alignItems: "end",
            width: "100%",
          })}
        >
          {/* 통신사 dropdown + 전화번호 input */}
          <div
            className={css({
              display: "flex",
              flexDirection: { base: "column", md: "row" },
              gap: "8px",
              alignItems: "end",
              width: "stretch",
            })}
          >
            <Dropdown
              value={agency}
              onChange={(val) => setAgency(val)}
              placeholder="통신사"
              options={AGENCY}
              className={css({
                width: { base: "stretch", md: "120px" },
              })}
              label="연락처"
              required
              disabled={isVerified || cooldown > 0}
            />

            <Input
              value={clientContact}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setClientContact(formatted);
              }}
              placeholder="010-0000-0000"
              className={css({
                flex: 1,
                minWidth: 0,
              })}
              disabled={isVerified || cooldown > 0}
            />
          </div>

          {/* 인증 버튼 */}
          <Button
            onClick={handleRequestCode}
            variant="primary"
            disabled={!clientContact || !agency || cooldown > 0 || isVerified}
            className={css({
              height: "44px",
              width: { base: "stretch", md: "auto" },
            })}
          >
            {cooldown > 0 ? `${cooldown}s` : "인증"}
          </Button>
        </div>

        {/* 인증번호 input + 확인 버튼 */}
        <div
          className={css({
            display: "flex",
            gap: "8px",
          })}
        >
          <Input
            value={certification}
            onChange={(e) => {
              const numeric = onlyNumber(e.target.value);
              setCertification(numeric);
            }}
            placeholder="인증번호 입력"
            className={css({
              flex: 1,
              minWidth: 0,
            })}
            disabled={isVerified}
          />

          <Button
            onClick={handleVerifyCode}
            variant="primary"
            disabled={!certification || isVerified}
            className={css({
              height: "44px",
            })}
          >
            확인
          </Button>
        </div>
      </div>
    </Section>
  );
}
