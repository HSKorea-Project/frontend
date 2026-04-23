import Button from "@/components/ui/Button/Button";
import { css } from "@/styled-system/css";
import Link from "next/link";
import CallCircle from "@/assets/svgs/call-circle.svg";
import HeroContainer from "@/components/layout/HeroContainer/HeroContainer";
import ServiceSection from "./_components/ServiceSection";
import ReasonSection from "./_components/ReasonSection";
import ProcessSection from "./_components/ProcessSection";
import CTASection from "./_components/CTASection";

// 온보딩 페이지
export default function Onboarding() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      {/* Hero */}
      <HeroContainer>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: "16px",
            width: "100%",
            maxWidth: { base: "100%", md: "350px" },
          })}
        >
          {/* 제목 */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
            })}
          >
            <p
              className={css({
                color: "white",
                fontSize: { base: "20px", md: "24px" },
              })}
            >
              기업이전의 시작과 끝
            </p>
            <h1
              className={css({
                fontWeight: "bold",
                color: "orange.400",
                fontSize: { base: "28px", md: "32px" },
              })}
            >
              에이치에스코리아
            </h1>
          </div>
          <p
            className={css({
              fontSize: "12px",
              color: "white",
              opacity: "80",
            })}
          >
            사무실 이전부터 장비 운송, 문서보관, 폐기까지
            <br />
            기업 운영에 필요한 모든 이전 서비스를 안전하고 체계적으로 수행합니다.
          </p>
          <p
            className={css({
              display: "flex",
              alignItems: "center",
              columnGap: "4px",
              fontWeight: "semibold",
              fontSize: "12px",
              color: "white",
              opacity: "80",
            })}
          >
            <CallCircle />
            전화상담 : 1551-2474
          </p>
          <Link href="/inquiry/new">
            <Button
              fullWidth
              className={css({
                fontWeight: "bold",
              })}
            >
              무료견적 문의하기
            </Button>
          </Link>
        </div>
      </HeroContainer>

      {/* 주요 서비스 */}
      <ServiceSection />

      {/* 왜 에이치에스코리아인가 */}
      <ReasonSection />

      {/* 작업 프로세스 */}
      <ProcessSection />

      {/* CTA */}
      <CTASection />
    </div>
  );
}
