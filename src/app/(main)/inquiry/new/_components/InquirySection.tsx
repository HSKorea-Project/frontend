"use client";

import { css } from "@/styled-system/css";
import Section from "./Section";
import Upload from "./Upload";
import Radio from "@/components/ui/Radio/Radio";
import Input from "@/components/ui/Input/Input";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import Textarea from "@/components/ui/Textarea/Textarea";
import DateInput from "./DateInput";

// InquirySection Props 타입 정의
interface InquiryProps {
  square: string;
  setSquare: (v: string) => void;
  moveDate: Date | null;
  setMoveDate: (v: Date | null) => void;
  moveType: string;
  setMoveType: (v: string) => void;
  origin: string;
  setOrigin: (v: string) => void;
  originDetail: string;
  setOriginDetail: (v: string) => void;
  destination: string;
  setDestination: (v: string) => void;
  destinationDetail: string;
  setDestinationDetail: (v: string) => void;
  inquiry: string;
  setInquiry: (v: string) => void;
  waste: "included" | "excluded";
  setWaste: (v: "included" | "excluded") => void;
  airconditioner: "included" | "excluded";
  setAirconditioner: (v: "included" | "excluded") => void;
}

// '문의 정보' 섹션 컴포넌트
export default function InquirySection({
  square,
  setSquare,
  moveDate,
  setMoveDate,
  moveType,
  setMoveType,
  origin,
  setOrigin,
  originDetail,
  setOriginDetail,
  destination,
  setDestination,
  destinationDetail,
  setDestinationDetail,
  inquiry,
  setInquiry,
  waste,
  setWaste,
  airconditioner,
  setAirconditioner,
}: InquiryProps) {
  return (
    <Section title="문의 정보" icon="info">
      <div
        className={css({
          display: "flex",
          flexDirection: { base: "column", md: "row" },
          gap: "20px",
        })}
      >
        {/* 이사 평 수 및 인원 수 입력 Input */}
        <Input
          value={square}
          onChange={(e) => setSquare(e.target.value)}
          label="평수 / 인원 수"
          required
          placeholder="예: 50평 / 30명"
        />
        {/* 이사 예정일 선택 DatePicker */}
        <DateInput
          value={moveDate}
          onChange={(val) => setMoveDate(val)}
          label="이사 예정일"
          required
        />
      </div>

      {/* 이사 유형 선택 Dropdown */}
      <Dropdown
        value={moveType}
        onChange={(val) => setMoveType(val)}
        label="이사 서비스"
        required
        placeholder="서비스 유형을 선택하세요"
        options={[
          { label: "사무실/관공서 이사", value: "office_move" },
          { label: "학교이사", value: "school_move" },
          { label: "물류창고", value: "warehouse_move" },
          { label: "병원이사", value: "hospital_move" },
          { label: "실험실이사", value: "lab_move" },
          { label: "공장이사", value: "factory_move" },
          { label: "상업시설이사", value: "commercial_move" },
          { label: "가정이사", value: "home_move" },
        ]}
      />

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        })}
      >
        {/* 출발지 주소 입력 Input * 주소 검색 API 연동 예정  */}
        <Input
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          label="출발지 주소"
          required
          placeholder="주소 검색"
        />
        {/* 출발지 상세 주소 입력 Input */}
        <Input
          value={originDetail}
          onChange={(e) => setOriginDetail(e.target.value)}
          placeholder="상세주소 입력 (선택)"
        />
      </div>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        })}
      >
        {/* 도착지 주소 입력 Input * 주소 검색 API 연동 예정  */}
        <Input
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          label="도착지 주소"
          required
          placeholder="주소 검색"
        />
        {/* 도착지 상세 주소 입력 Input */}
        <Input
          value={destinationDetail}
          onChange={(e) => setDestinationDetail(e.target.value)}
          placeholder="상세주소 입력 (선택)"
        />
      </div>

      {/* 문의 내용 입력 Textarea */}
      <Textarea
        value={inquiry}
        onChange={(e) => setInquiry(e.target.value)}
        label="문의 내용"
        placeholder="추가 문의사항이 있으시면 입력해 주세요"
      />

      <div
        className={css({
          display: "flex",
          flexDirection: { base: "column", md: "row" },
          gap: "16px",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          })}
        >
          {/* 폐기물 처리 여부 선택 Radio */}
          <p className={css({ fontWeight: "regular", fontSize: "12px", color: "gray.700" })}>
            폐기물 처리
          </p>
          <div className={css({ display: "flex", gap: "16px" })}>
            <Radio
              label="미포함"
              checked={waste === "excluded"}
              onClick={() => setWaste("excluded")}
            />
            <Radio
              label="포함"
              checked={waste === "included"}
              onClick={() => setWaste("included")}
            />
          </div>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          })}
        >
          {/* 에어컨 이전 설치 여부 선택 Radio */}
          <p className={css({ fontWeight: "regular", fontSize: "12px", color: "gray.700" })}>
            에어컨 이전 설치
          </p>
          <div className={css({ display: "flex", gap: "16px" })}>
            <Radio
              label="미포함"
              checked={airconditioner === "excluded"}
              onClick={() => setAirconditioner("excluded")}
            />
            <Radio
              label="포함"
              checked={airconditioner === "included"}
              onClick={() => setAirconditioner("included")}
            />
          </div>
        </div>
      </div>
      {/* 업로드 박스 */}
      <Upload label="파일 업로드" />
    </Section>
  );
}
