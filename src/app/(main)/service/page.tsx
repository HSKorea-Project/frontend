import HeroContainer from "@/components/layout/HeroContainer/HeroContainer";
import ServiceIntroSection from "./_components/ServiceIntroSection";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import { css } from "@/styled-system/css";

// 서비스 소개
export default function ServicePage() {
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
          <Breadcrumb currentPageName="서비스 소개" />
          {/* 제목 */}
          <h1
            className={css({
              fontWeight: "bold",
              fontSize: { base: "24px", md: "32px" },
            })}
          >
            <span
              className={css({
                display: "block",
                color: "white",
              })}
            >
              믿을 수 있는 기업이전 파트너
            </span>
            <span
              className={css({
                display: "block",
                color: "orange.400",
              })}
            >
              에이치에스코리아
            </span>
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

      {/* 서비스 소개 */}
      <ServiceIntroSection />
    </div>
  );
}
