"use client";

import { css } from "@/styled-system/css";
import Section from "./Section";
import Upload from "./Upload";
import Radio from "@/components/ui/Radio/Radio";
import Input from "@/components/ui/Input/Input";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import Textarea from "@/components/ui/Textarea/Textarea";
import DateInput from "./DateInput";
import { QuoteForm } from "../../_types/quote";
import { MOVE_TYPE } from "@/constants/moveType";
import AddressInput from "./AddressInput";

// InquirySection Props 타입 정의
interface InquiryProps {
  form: QuoteForm;
  setForm: React.Dispatch<React.SetStateAction<QuoteForm>>;
}

// '문의 정보' 섹션 컴포넌트
export default function InquirySection({ form, setForm }: InquiryProps) {
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
          value={form.square}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              square: e.target.value,
            }))
          }
          label="평수 / 인원 수"
          required
          placeholder="예: 50평 / 30명"
        />
        {/* 이사 예정일 선택 DatePicker */}
        <DateInput
          value={form.moveDate}
          onChange={(val) => {
            setForm((prev) => ({
              ...prev,
              moveDate: val,
            }));
          }}
          label="이사 예정일"
          required
        />
      </div>

      {/* 이사 유형 선택 Dropdown */}
      <Dropdown
        value={form.moveType}
        onChange={(val) => {
          setForm((prev) => ({
            ...prev,
            moveType: val,
          }));
        }}
        label="이사 서비스"
        required
        placeholder="서비스 유형을 선택하세요"
        options={MOVE_TYPE}
      />

      {/* 주소 검색 기능 추가 예정 */}
      <AddressInput
        label="출발지 주소"
        value={form.origin}
        detailValue={form.originDetail}
        required
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            origin: v,
          }))
        }
        onDetailChange={(v) =>
          setForm((prev) => ({
            ...prev,
            originDetail: v,
          }))
        }
      />

      <AddressInput
        label="도착지 주소"
        value={form.destination}
        detailValue={form.destinationDetail}
        required
        onChange={(v) =>
          setForm((prev) => ({
            ...prev,
            destination: v,
          }))
        }
        onDetailChange={(v) =>
          setForm((prev) => ({
            ...prev,
            destinationDetail: v,
          }))
        }
      />

      {/* 문의 내용 입력 Textarea */}
      <Textarea
        value={form.inquiry}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            inquiry: e.target.value,
          }))
        }
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
              checked={form.waste === "excluded"}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  waste: "excluded",
                }))
              }
            />
            <Radio
              label="포함"
              checked={form.waste === "included"}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  waste: "included",
                }))
              }
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
              checked={form.airconditioner === "excluded"}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  airconditioner: "excluded",
                }))
              }
            />
            <Radio
              label="포함"
              checked={form.airconditioner === "included"}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  airconditioner: "included",
                }))
              }
            />
          </div>
        </div>
      </div>
      {/* 업로드 박스 */}
      <Upload label="파일 업로드" />
    </Section>
  );
}
