import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import Button from "@/components/ui/Button/Button";
import { INFOS } from "@/constants/info";
import { css } from "@/styled-system/css";
import Link from "next/link";

// 온보딩: CTA 섹션
export default function CTASection() {
  return (
    <section
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "24px",
        bg: "orange.400",
        paddingX: { base: "20px", md: "150px" },
        paddingY: "40px",
      })}
    >
      <SectionTitle align="center" gap={24} color="white" showBar={false}>
        기업이사, 기관 이전, 보관까지 한 번에 해결하세요!
      </SectionTitle>
      <p
        className={css({
          color: "white",
          fontSize: "16px",
        })}
      >
        지금 바로 무료로 견적을 받아보세요.
      </p>
      <article
        className={css({
          display: "grid",
          gridTemplateColumns: {
            md: "1fr",
            lg: "minmax(300px, 1fr) minmax(300px, 1fr) minmax(300px, 1fr)",
          },
          gap: { base: "10px", md: "20px" },
          width: "100%",
          maxWidth: "980px",
        })}
      >
        {INFOS.slice(1, 4).map((info, idx) => (
          <div
            key={idx}
            className={css({
              display: "flex",
              flexDirection: "column",
              rowGap: "8px",
              color: "white",
              border: "1px solid",
              borderColor: "white/30",
              p: "16px",
              borderRadius: "8px",
              bg: "white/20",
            })}
          >
            <p
              className={css({
                fontSize: "12px",
                fontWeight: "semibold",
              })}
            >
              {info.label}
            </p>
            <p
              className={css({
                fontSize: "16px",
                fontWeight: "bold",
              })}
            >
              {info.value}
            </p>
          </div>
        ))}
      </article>
      <Link
        href="/inquiry/new"
        className={css({
          width: { base: "100%", md: "300px" },
        })}
      >
        <Button
          fullWidth
          variant="white"
          className={css({
            width: "100%",
          })}
        >
          온라인 문의하기
        </Button>
      </Link>
    </section>
  );
}
