"use client";

import { css } from "@/styled-system/css";
import { useState } from "react";
import Password from "./_components/Password";
import Agreement from "./_components/Agreement";
import Inquiry from "./_components/Inquiry";
import Customer from "./_components/Customer";
import { QuoteForm } from "../_types/quote";

// 견적문의 페이지
export default function QuoteInquiryPage() {
  // 폼 값 전체 관리
  const [form, setForm] = useState<QuoteForm>({
    clientCompany: "",
    clientName: "",
    agency: "",
    clientContact: "",
    certification: "",

    square: "",
    moveDate: null,
    moveType: "",
    origin: "",
    originDetail: "",
    destination: "",
    destinationDetail: "",
    inquiry: "",
    waste: "excluded",
    airconditioner: "excluded",

    password: "",
    confirmPassword: "",

    privacy: false,
  });

  return (
    <div
      className={css({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(20px, 1fr) minmax(300px, 650px) minmax(20px, 1fr)",
      })}
    >
      <div />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          paddingY: "40px",
          width: "full",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            rowGap: "24px",
            width: "full",
          })}
        >
          {/* 제목 */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            })}
          >
            <h3
              className={css({
                fontWeight: "bold",
                color: "gray.900",
                fontSize: {
                  base: "24px",
                },
              })}
            >
              이사 견적을 문의하세요
            </h3>
            <p
              className={css({
                color: "gray.500",
                fontSize: {
                  base: "12px",
                },
              })}
            >
              아래 양식을 작성하시면 빠른 시일 내에 견적을 안내해 드립니다.
              <br />* 표시 항목은 필수 입력 사항입니다.
            </p>
          </div>

          {/* 정보 입력 섹션 */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
            })}
          >
            {/* 고객 정보 */}
            <Customer form={form} setForm={setForm} />

            {/* 문의 정보 */}
            <Inquiry form={form} setForm={setForm} />

            {/* 게시물 비밀번호 */}
            <Password form={form} setForm={setForm} />

            {/* 약관 동의 */}
            <Agreement form={form} setForm={setForm} />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
