"use client";

import { css } from "@/styled-system/css";
import InfoIcon from "@/assets/svgs/info.svg";
import Section from "@/app/(main)/inquiry/new/_components/Section";
import Badge from "@/components/ui/Badge/Badge";
import DetailInfoItem from "./DetailInfoItem";
import {
  IncludeState,
  IncludeStateBadgeType,
  IncludeStateLabel,
  InquiryDetailItem,
} from "../_types/inquiryDetail";

// Inquiry Props 타입 정의
interface InquiryProps {
  data: InquiryDetailItem;
}

// '문의 정보' 섹션 컴포넌트
export default function Inquiry({ data }: InquiryProps) {
  const wasteDisposalState = data.wasteDisposal ? IncludeState.TRUE : IncludeState.FALSE;

  const acInstallationState = data.acInstallation ? IncludeState.TRUE : IncludeState.FALSE;

  return (
    <Section title="문의 정보" icon={InfoIcon}>
      <div className={css({ display: "flex", flexDirection: "column", gap: "12px" })}>
        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            gap: "8px",
          })}
        >
          <DetailInfoItem label="평수 / 인원">{data.spaceInfo}</DetailInfoItem>

          <DetailInfoItem label="이사 예정일">{data.moveDate}</DetailInfoItem>

          <DetailInfoItem label="이사 서비스">
            <Badge content={data.serviceType} size="default" type="primary" />
          </DetailInfoItem>
        </div>

        <div
          className={css({
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            gap: "8px",
          })}
        >
          <DetailInfoItem label="폐기물 처리">
            <Badge
              content={IncludeStateLabel[wasteDisposalState]}
              size="default"
              type={IncludeStateBadgeType[wasteDisposalState]}
            />
          </DetailInfoItem>

          <DetailInfoItem label="에어컨 이전 설치">
            <Badge
              content={IncludeStateLabel[acInstallationState]}
              size="default"
              type={IncludeStateBadgeType[acInstallationState]}
            />
          </DetailInfoItem>

          <DetailInfoItem label="첨부파일">
            {data.fileName && data.fileUrl ? (
              <a
                href={data.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={css({
                  color: "orange.500",
                  textDecoration: "underline",
                  cursor: "pointer",
                })}
              >
                {data.fileName}
              </a>
            ) : (
              "-"
            )}
          </DetailInfoItem>
        </div>

        <DetailInfoItem label="출발지 주소">{data.fromAddress}</DetailInfoItem>

        <DetailInfoItem label="도착지 주소">{data.toAddress}</DetailInfoItem>

        <DetailInfoItem label="문의 내용" withBorder={false}>
          {data.contents}
        </DetailInfoItem>
      </div>
    </Section>
  );
}
