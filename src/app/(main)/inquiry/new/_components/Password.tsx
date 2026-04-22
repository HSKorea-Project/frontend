"use client";

import { css } from "@/styled-system/css";
import Section from "./Section";
import Input from "@/components/ui/Input/Input";
import { QuoteForm } from "../../_types/quote";
import { SetStateAction } from "react";
import { validateConfirmPassword, validatePassword } from "@/utils/validate";
import PasswordIcon from "@/assets/svgs/password.svg";

// Password Props 타입 정의
interface PasswordProps {
  form: QuoteForm;
  setForm: React.Dispatch<SetStateAction<QuoteForm>>;
}

// '게시물 비밀번호' 섹션 컴포넌트
export default function Password({ form, setForm }: PasswordProps) {
  const passwordError = validatePassword(form.password);
  const confirmPasswordError = validateConfirmPassword(form.password, form.confirmPassword);

  return (
    <Section title="게시물 비밀번호" icon={PasswordIcon}>
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
          id="password"
          value={form.password}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
          type="password"
          label="비밀번호"
          required
          placeholder="비밀번호를 입력하세요"
          error={passwordError ?? undefined}
        />

        {/* 비밀번호 재입력 Input */}
        <Input
          id="confirmPassword"
          value={form.confirmPassword}
          onChange={(e) => {
            setForm((prev) => ({
              ...prev,
              confirmPassword: e.target.value,
            }));
          }}
          type="password"
          label="비밀번호 확인"
          required
          placeholder="비밀번호를 다시 입력하세요"
          error={confirmPasswordError ?? undefined}
        />
      </div>
    </Section>
  );
}
