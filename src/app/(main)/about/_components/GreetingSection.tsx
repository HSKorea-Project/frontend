import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { GREETING_CONTENT } from "@/constants/greeting";
import { css } from "@/styled-system/css";

// 대표 인삿말 섹션
export default function GreetingSection() {
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
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "64px 1fr" },
          gap: { base: "24px", md: "150px" },
        })}
      >
        <SectionTitle enTitle="GREETING">
          대표
          <br />
          인삿말
        </SectionTitle>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          })}
        >
          <>
            {GREETING_CONTENT.map((content, idx) => (
              <p
                key={idx}
                className={css({
                  fontSize: "16px",
                  color: "gray.700",
                })}
              >
                {content}
              </p>
            ))}
            <div
              className={css({
                display: "flex",
                columnGap: "16px",
                alignItems: "center",
              })}
            >
              <div
                className={css({
                  width: "30px",
                  height: "1px",
                  bg: "orange.400",
                  borderRadius: "full",
                })}
              />
              <p
                className={css({
                  fontWeight: "bold",
                  fontSize: "12px",
                  color: "gray.900",
                })}
              >
                주식회사 에이치에스코리아 대표
              </p>
            </div>
          </>
        </div>
      </article>
    </section>
  );
}
