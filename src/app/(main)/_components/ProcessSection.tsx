import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { css } from "@/styled-system/css";
import { PROCESS_STEP } from "@/constants/processStep";
import RightWingIcon from "@/assets/svgs/right-wing.svg";

// 온보딩: 작업 프로세스 섹션
export default function ProcessSection() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "24px",
        bg: "#0A1F5C",
        paddingX: { base: "20px", md: "150px" },
        paddingY: "40px",
      })}
    >
      <SectionTitle align="center" gap={24} barWidth={50} color="white">
        체계적인 작업 프로세스
      </SectionTitle>
      <article
        className={css({
          display: "flex",
          width: "100%",
          flexDirection: { base: "column", xl: "row" },
          justifyContent: "center",
          rowGap: { base: "20px", xl: "0px" },
        })}
      >
        {PROCESS_STEP.map((step, idx) => (
          <div
            key={idx}
            className={css({
              display: "flex",
              alignItems: "center",
              columnGap: "4px",
            })}
          >
            <div
              className={css({
                display: "flex",
                columnGap: "8px",
                justifyContent: "center",
                alignItems: "center",
              })}
            >
              <p
                className={css({
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  border: "2px solid",
                  borderColor: "orange.400",
                  borderRadius: "full",
                  color: "orange.400",
                  fontSize: "12px",
                  fontWeight: "bold",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                {idx + 1}
              </p>
              <p
                className={css({
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "semibold",
                  alignItems: "center",
                  justifyContent: "center",
                })}
              >
                {step}
              </p>
            </div>
            {/* 마지막 제외 */}
            {idx !== PROCESS_STEP.length - 1 && (
              <RightWingIcon
                width={24}
                height={24}
                fill={"#868E96"}
                className={css({
                  display: { base: "none", xl: "block" },
                  marginX: "4px",
                })}
              />
            )}
          </div>
        ))}
      </article>
    </section>
  );
}
