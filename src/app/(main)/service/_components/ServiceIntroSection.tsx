import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import { SERVICE_INTRODUCES } from "@/constants/serviceIntroduce";

import { css } from "@/styled-system/css";
import { formatTwoDigit } from "@/utils/format";

// 서비스 소개 섹션
export default function ServiceIntroSection() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: { base: "20px", md: "150px" },
        paddingY: "40px",
        bg: "white",
      })}
    >
      <article
        className={css({
          width: "100%",
          maxWidth: "980px",
          display: "flex",
          flexDirection: "column",
          rowGap: "24px",
        })}
      >
        <SectionTitle
          enTitle="SERVICE INTRODUCTION"
          className={css({
            width: "110px",
          })}
        >
          서비스 소개
        </SectionTitle>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            rowGap: { base: "10px", md: "20px" },
          })}
        >
          {SERVICE_INTRODUCES.map((intro, idx) => (
            <ServiceCard
              className={css({
                alignItems: "flex-start",
              })}
              key={idx}
              icon={intro.icon}
              direction="column"
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "12px",
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    columnGap: "8px",
                    alignItems: "center",
                  })}
                >
                  <p
                    className={css({
                      color: "orange.900",
                      fontWeight: "bold",
                      fontSize: "12px",
                    })}
                  >
                    SERVICE {formatTwoDigit(idx + 1)}
                  </p>
                  <p
                    className={css({
                      color: "gray.900",
                      fontWeight: "bold",
                      fontSize: "16px",
                    })}
                  >
                    {intro.title}
                  </p>
                </div>
                <p
                  className={css({
                    color: "gray.700",
                    fontSize: "16px",
                  })}
                >
                  {intro.description}
                </p>
              </div>
            </ServiceCard>
          ))}
        </div>
      </article>
    </section>
  );
}
