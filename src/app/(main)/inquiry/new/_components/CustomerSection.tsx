"use client";

import { css } from "@/styled-system/css";
import Card from "./Card";
import Input from "@/components/ui/Input/Input";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import Button from "@/components/ui/Button/Button";
import { formatPhoneNumber, onlyNumber } from "@/utils/format";

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

export default function CustomerSection({
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
  return (
    <Card title="고객 정보" icon="user">
      <Input
        value={clientCompany}
        onChange={(e) => setClientCompany(e.target.value)}
        label="고객사명"
        required
        placeholder="회사명 또는 기관명을 입력하세요"
      />

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
          {/* 드롭다운 + 인풋 */}
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
              options={[
                { label: "KT", value: "kt" },
                { label: "SKT", value: "skt" },
                { label: "LG U+", value: "lg" },
                { label: "알뜰폰 KT", value: "al_kt" },
                { label: "알뜰폰 SKT", value: "al_skt" },
                { label: "알뜰폰 LG U+", value: "al_lg" },
              ]}
              className={css({
                width: { base: "stretch", md: "120px" },
              })}
              label="연락처"
              required
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
            />
          </div>

          {/* 인증 버튼 */}
          <Button
            variant="primary"
            disabled={!clientContact}
            className={css({
              height: "44px",
              width: { base: "stretch", md: "auto" },
            })}
          >
            인증
          </Button>
        </div>

        {/* 인증번호 */}
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
          />

          <Button
            variant="primary"
            disabled={!certification}
            className={css({
              height: "44px",
            })}
          >
            확인
          </Button>
        </div>
      </div>
    </Card>
  );
}
