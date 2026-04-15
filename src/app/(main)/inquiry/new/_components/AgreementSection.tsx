"use client";

import { css } from "@/styled-system/css";
import Card from "./Card";
import Button from "@/components/ui/Button/Button";
import CheckBox from "@/components/ui/CheckBox/CheckBox";
import { Dispatch, SetStateAction } from "react";

interface AgreementProps {
  privacy: boolean;
  setPrivacy: Dispatch<SetStateAction<boolean>>;
}

export default function AgreementSection({ privacy, setPrivacy }: AgreementProps) {
  const handlePrivacyChange = () => {
    setPrivacy((prev) => !prev);
  };

  return (
    <Card title="약관 동의" icon="confirm">
      <div
        className={css({
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          alignItems: "center",
          py: "12px",
          px: "16px",
          bg: "gray.50",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: "gray.200",
        })}
      >
        <CheckBox checked={privacy} onClick={() => handlePrivacyChange()} />
        <p
          className={css({
            fontWeight: "regular",
            color: "gray.700",
            fontSize: { base: "12px" },
          })}
        >
          개인정보 수집 및 이용에 동의합니다.
        </p>
        <p
          className={css({
            color: "green.600",
            textDecoration: "underline",
            fontSize: { base: "12px" },
          })}
        >
          [상세보기]
        </p>
      </div>

      <hr
        className={css({
          height: "1px",
          bg: "gray.200",
          border: "none",
        })}
      />

      <p
        className={css({
          fontWeight: "regular",
          color: "gray.500",
          fontSize: { base: "12px" },
          textAlign: "center",
        })}
      >
        문의 내용은 담당자 검토 후 빠른 시일 내 연락드립니다.
      </p>

      <Button variant="primary" fullWidth className={css({ maxWidth: "200px", marginX: "auto" })}>
        문의하기
      </Button>
    </Card>
  );
}
