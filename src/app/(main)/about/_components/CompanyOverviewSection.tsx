import { css } from "@/styled-system/css";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { INFOS } from "@/constants/info";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";

// 회사 개요 섹션
export default function CompanyOverviewSection() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: { base: "20px", md: "150px" },
        paddingY: "40px",
        bg: "orange.50",
      })}
    >
      <article
        className={css({
          width: "100%",
          maxWidth: "980px",
          display: "grid",
          gridTemplateColumns: { base: "1fr", xl: "100px 1fr" },
          gap: { base: "24px", xl: "150px" },
        })}
      >
        <SectionTitle
          enTitle="COMPANY OVERVIEW"
          className={css({
            width: "100px",
          })}
        >
          회사 개요
        </SectionTitle>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", xl: "1fr 1fr" },
            gap: { base: "10px", xl: "20px" },
          })}
        >
          {INFOS.map((info, idx) => (
            <ServiceCard
              className={css({
                ...(idx === 4 && {
                  gridColumn: { xl: "span 2" },
                }),
              })}
              key={idx}
              icon={info.icon}
              iconBg
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "4px",
                })}
              >
                <p
                  className={css({
                    color: "gray.500",
                    fontWeight: "semibold",
                    fontSize: "12px",
                  })}
                >
                  {info.label}
                </p>
                <p
                  className={css({
                    color: "gray.900",
                    fontWeight: "bold",
                    fontSize: "16px",
                  })}
                >
                  {info.value}
                </p>
              </div>
            </ServiceCard>
          ))}
        </div>
      </article>
    </section>
  );
}
