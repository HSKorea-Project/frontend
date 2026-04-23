import { REASONS } from "@/constants/reason";
import { css } from "@/styled-system/css";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { formatTwoDigit } from "@/utils/format";

// 온보딩: 이유 섹션
export default function ReasonSection() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "32px",
        bg: "#F4F6FA",
        paddingX: { base: "20px", md: "150px" },
        paddingY: "40px",
      })}
    >
      <SectionTitle align="center" gap={32} barWidth={50}>
        왜 에이치에스코리아인가?
      </SectionTitle>
      <article
        className={css({
          display: "grid",
          gridTemplateColumns: {
            lg: "1fr",
            xl: "minmax(300px, 1fr) minmax(300px, 1fr) minmax(300px, 1fr)",
          },
          gap: { base: "10px", md: "20px" },
          width: "100%",
          maxWidth: "980px",
        })}
      >
        {REASONS.map((reason, idx) => (
          <div
            key={idx}
            className={css({
              display: "flex",
              flexDirection: "column",
              rowGap: "12px",
              bg: "white",
              border: "1px solid",
              borderColor: "gray.300",
              borderRadius: "8px",
              p: "32px",
              width: "100%",
            })}
          >
            <div
              className={css({
                bg: "orange.400",
                borderRadius: "4px",
                paddingX: "8px",
                paddingY: "4px",
                color: "orange.50",
                fontSize: "12px",
                fontWeight: "bold",
                width: "fit",
                height: "fit",
              })}
            >
              REASON {formatTwoDigit(idx + 1)}
            </div>
            <h3
              className={css({
                fontWeight: "bold",
                fontSize: "16px",
                color: "gray.900",
              })}
            >
              {reason.title}
            </h3>
            <p
              className={css({
                display: "flex",
                flexDirection: "column",
                color: "gray.700",
                fontSize: "12px",
              })}
            >
              {reason.description.map((desc, idx) => (
                <span key={idx}>{desc}</span>
              ))}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
