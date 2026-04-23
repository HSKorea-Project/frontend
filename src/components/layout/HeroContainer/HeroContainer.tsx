import { css } from "@/styled-system/css";
import OrangeCircle from "@/assets/svgs/orange-circle.svg";
import WhiteCircle from "@/assets/svgs/white-circle.svg";

// 히어로 영역 Props 타입 정의
interface HeroContainerProps {
  children: React.ReactNode;
}

// 히어로 컨테이너
export default function HeroContainer({ children }: HeroContainerProps) {
  return (
    <section
      className={css({
        display: "flex",
        position: "relative",
        justifyContent: { base: "flex-start", md: "center" },
        width: "100%",
        height: "400px",
        paddingX: { base: "20px", md: "150px" },
        paddingY: "40px",
        background:
          "linear-gradient(135deg, rgba(10,31,92,0.9) 0%, rgba(26,58,140,0.9) 55%, rgba(10,31,92,0.9) 100%)",
      })}
    >
      {/* 배경 요소 */}
      <OrangeCircle
        aria-hidden
        className={css({
          position: "absolute",
          right: 0,
          top: -10,
        })}
      />
      <WhiteCircle
        aria-hidden
        className={css({
          position: "absolute",
          right: 20,
          bottom: -10,
        })}
      />

      {/* 콘텐츠 영역 */}
      <article
        className={css({
          width: "100%",
          maxWidth: "980px",
        })}
      >
        {children}
      </article>
    </section>
  );
}
