"use client";

import { css } from "@/styled-system/css";
import Section from "./Section";
import Button from "@/components/ui/Button/Button";
import CheckBox from "@/components/ui/CheckBox/CheckBox";
import { SetStateAction } from "react";
import { QuoteForm } from "../../_types/quote";
import ConfirmIcon from "@/assets/svgs/confirm.svg";

// Agreement Props 타입 정의
interface AgreementProps {
  form: QuoteForm;
  setForm: React.Dispatch<SetStateAction<QuoteForm>>;
}

// '약관 동의' 섹션 컴포넌트
export default function Agreement({ form, setForm }: AgreementProps) {
  return (
    <Section title="약관 동의" icon={ConfirmIcon}>
      <div
        id="privacy"
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
        {/* 약관 동의 박스 */}
        <CheckBox
          checked={form.privacy}
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              privacy: !form.privacy,
            }))
          }
        />
        <p
          className={css({
            fontWeight: "regular",
            color: "gray.700",
            fontSize: "12px",
          })}
        >
          개인정보 수집 및 이용에 동의합니다.
        </p>
        <p
          className={css({
            color: "orange.500",
            textDecoration: "underline",
            fontSize: "12px",
            cursor: "pointer",
            // 상세 약관 동의 내용 추가 예정
          })}
        >
          [상세보기]
        </p>
      </div>

      {/* 구분선 */}
      <hr
        className={css({
          height: "1px",
          bg: "gray.200",
          border: "none",
        })}
      />

      {/* 버튼 */}
      <Button
        type="submit"
        variant="primary"
        fullWidth
        className={css({ maxWidth: "200px", marginX: "auto" })}
      >
        문의하기
      </Button>
    </Section>
  );
}
