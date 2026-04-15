"use client";

import { css } from "@/styled-system/css";
import Card from "./Card";
import Input from "@/components/ui/Input/Input";

interface PasswordProps {
  password: string;
  setPassword: (v: string) => void;
  confirmPassword: string;
  setConfirmPassword: (v: string) => void;
}

export default function PasswordSection({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: PasswordProps) {
  return (
    <Card title="게시물 비밀번호" icon="password">
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
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="비밀번호"
          required
          placeholder="비밀번호를 입력하세요"
        />
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="비밀번호 확인"
          required
          placeholder="비밀번호를 다시 입력하세요"
        />
      </div>
    </Card>
  );
}
