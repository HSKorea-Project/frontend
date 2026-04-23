import HeroContainer from "@/components/layout/HeroContainer/HeroContainer";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import { css } from "@/styled-system/css";
import GreetingSection from "./_components/GreetingSection";
import CompanyOverviewSection from "./_components/CompanyOverviewSection";

// 회사 소개 페이지
export default function AboutPage() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      <HeroContainer>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
          })}
        >
          <Breadcrumb currentPageName="회사 소개" />
          {/* 제목 */}
          <h1
            className={css({
              fontWeight: "bold",
              fontSize: { base: "24px", md: "32px" },
            })}
          >
            <p
              className={css({
                color: "white",
              })}
            >
              믿을 수 있는 기업이전 파트너
            </p>
            <p
              className={css({
                color: "orange.400",
              })}
            >
              에이치에스코리아
            </p>
          </h1>
          <div
            className={css({
              width: "50px",
              height: "3px",
              bg: "orange.400",
              borderRadius: "full",
            })}
          />
        </div>
      </HeroContainer>

      {/* 대표 인삿말 */}
      <GreetingSection />

      {/* 회사 개요 */}
      <CompanyOverviewSection />
    </div>
  );
}
