"use client";

import { css } from "@/styled-system/css";
import UserIcon from "@/assets/svgs/user.svg";
import Section from "../../../new/_components/Section";
import { InquiryDetailItem } from "../_types/inquiryDetail";
import DetailInfoItem from "./DetailInfoItem";

// Customer Props 타입 정의
interface CustomerProps {
  data: InquiryDetailItem;
}

// '고객 정보' 섹션 컴포넌트
export default function Customer({ data }: CustomerProps) {
  return (
    <Section title="고객 정보" icon={UserIcon}>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            gap: "8px",
          })}
        >
          <DetailInfoItem label="고객사명">{data.companyName}</DetailInfoItem>
          <DetailInfoItem label="고객명">{data.customerName}</DetailInfoItem>
        </div>

        <DetailInfoItem label="연락처" withBorder={false}>
          {data.phone}
        </DetailInfoItem>
      </div>
    </Section>
  );
}
