"use client";

import { css } from "@/styled-system/css";
import Section from "./Section";
import Input from "@/components/ui/Input/Input";

// PasswordSection Props 타입 정의
interface PasswordProps {
  password: string;
  setPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
}

// '게시물 비밀번호' 섹션 컴포넌트
export default function PasswordSection({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: PasswordProps) {
  const isPwError = password.length > 0 && password.length < 4;
  const isConfirmPwError = confirmPassword.length > 0 && password !== confirmPassword;

  return (
    <Section title="게시물 비밀번호" icon="password">
      <p
        className={css({
          fontWeight: "regular",
          color: "gray.500",
          fontSize: { base: "12px" },
          wordBreak: "keep-all",
        })}
      >
        문의 내역 확인 시 사용할 비밀번호를 설정해 주세요. (4자리 이상)
      </p>
      <div
        className={css({
          display: "flex",
          flexDirection: {
            base: "column",
            md: "row",
          },
          gap: "16px",
        })}
      >
        {/* 비밀번호 입력 Input */}
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          label="비밀번호"
          required
          placeholder="비밀번호를 입력하세요"
          error={isPwError ? "비밀번호는 최소 4자리 이상이어야 합니다." : undefined}
        />
        {/* 비밀번호 재입력 Input */}
        <Input
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          type="password"
          label="비밀번호 확인"
          required
          placeholder="비밀번호를 다시 입력하세요"
          error={isConfirmPwError ? "비밀번호가 일치하지 않습니다." : undefined}
        />
      </div>
    </Section>
  );
}
