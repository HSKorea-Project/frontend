"use client";

import { css } from "@/styled-system/css";
import { useState } from "react";
import PasswordSection from "./_components/PasswordSection";
import AgreementSection from "./_components/AgreementSection";
import InquirySection from "./_components/InquirySection";
import CustomerSection from "./_components/CustomerSection";

// 견적문의 페이지
export default function QuoteInquiryPage() {
  const [clientCompany, setClientCompany] = useState("");
  const [clientName, setClientName] = useState("");
  const [agency, setAgency] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [certification, setCertification] = useState("");

  const [square, setSquare] = useState("");
  const [moveDate, setMoveDate] = useState<Date | null>(null);
  const [moveType, setMoveType] = useState("");
  const [origin, setOrigin] = useState("");
  const [originDetail, setOriginDetail] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationDetail, setDestinationDetail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [waste, setWaste] = useState<"included" | "excluded">("excluded");
  const [airconditioner, setAirconditioner] = useState<"included" | "excluded">("excluded");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [privacy, setPrivacy] = useState(false);

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
            <CustomerSection
              clientCompany={clientCompany}
              setClientCompany={setClientCompany}
              clientName={clientName}
              setClientName={setClientName}
              agency={agency}
              setAgency={setAgency}
              clientContact={clientContact}
              setClientContact={setClientContact}
              certification={certification}
              setCertification={setCertification}
            />

            {/* 문의 정보 */}
            <InquirySection
              square={square}
              setSquare={setSquare}
              moveDate={moveDate}
              setMoveDate={setMoveDate}
              moveType={moveType}
              setMoveType={setMoveType}
              origin={origin}
              setOrigin={setOrigin}
              originDetail={originDetail}
              setOriginDetail={setOriginDetail}
              destination={destination}
              setDestination={setDestination}
              destinationDetail={destinationDetail}
              setDestinationDetail={setDestinationDetail}
              inquiry={inquiry}
              setInquiry={setInquiry}
              waste={waste}
              setWaste={setWaste}
              airconditioner={airconditioner}
              setAirconditioner={setAirconditioner}
            />

            {/* 게시물 비밀번호 */}
            <PasswordSection
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />

            {/* 약관 동의 */}
            <AgreementSection privacy={privacy} setPrivacy={setPrivacy} />
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
