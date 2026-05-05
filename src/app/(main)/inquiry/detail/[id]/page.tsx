"use client";

import { css } from "@/styled-system/css";
import Inquiry from "@/app/(main)/inquiry/detail/[id]/_components/Inquiry";
import Customer from "@/app/(main)/inquiry/detail/[id]/_components/Customer";
import Button from "@/components/ui/Button/Button";
import { useParams, useRouter } from "next/navigation";
import { inquiryDetailMockData } from "@/constants/mocks/inquiryDetailMockData";

// 견적문의 상세 페이지
export default function InquiryDetailPage() {
  const params = useParams();
  const router = useRouter();

  const inquiryId = String(params.id);

  const detail = inquiryDetailMockData.find((item) => item.inquiryId === inquiryId);

  const handleBackToList = () => {
    router.push("/inquiry");
  };

  if (!detail) {
    return (
      <div className={css({ padding: "40px", textAlign: "center" })}>
        문의 내역을 찾을 수 없습니다.
      </div>
    );
  }

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
              견적 문의 상세
            </h3>
            <p
              className={css({
                color: "gray.500",
                fontSize: {
                  base: "12px",
                },
              })}
            >
              등록일: {detail.createdAt} · No. {detail.inquiryId}
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
            <Customer data={detail} />

            {/* 문의 정보 */}
            <Inquiry data={detail} />
          </div>

          {/* 버튼 섹션 */}
          <div
            className={css({
              display: "flex",
              flexDirection: { base: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: { base: "column", md: "row" },
                gap: { base: "12px", md: "8px" },
                width: { base: "full", md: "auto" },
                order: { base: 1, md: 2 },
              })}
            >
              <Button variant="primary">수정하기</Button>
              <Button variant="outline">삭제하기</Button>
            </div>

            <Button
              variant="outline"
              onClick={handleBackToList}
              className={css({
                width: { base: "full", md: "auto" },
                order: { base: 2, md: 1 },
              })}
            >
              ← 목록으로
            </Button>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
