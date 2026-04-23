import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { MOVE_TYPE } from "@/constants/moveType";
import { css } from "@/styled-system/css";

// 온보딩: 서비스 소개 섹션
export default function ServiceSection() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "24px",
        bg: "white",
        paddingX: { base: "20px", md: "150px" },
        paddingY: "40px",
      })}
    >
      <SectionTitle align="center" gap={24} barWidth={50}>
        주요 서비스
      </SectionTitle>
      <article
        className={css({
          width: "100%",
          maxWidth: "980px",
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
          gap: { base: "10px", md: "20px" },
        })}
      >
        {MOVE_TYPE.map((item, idx) => (
          <ServiceCard key={idx} borderColor="gray" align="center" icon={item.icon}>
            <p
              className={css({
                color: "gray.900",
                fontWeight: "bold",
                fontSize: "16px",
              })}
            >
              {item.label}
            </p>
          </ServiceCard>
        ))}
      </article>
    </section>
  );
}
