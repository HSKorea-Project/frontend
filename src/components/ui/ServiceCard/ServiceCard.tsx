import { css } from "@/styled-system/css";

// 서비스 카드 Props 타입 정의
interface ServiceCardProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // 아이콘 컴포넌트 받아오기
  iconBg?: boolean; // 아이콘 배경
  children: React.ReactNode; // 콘텐츠
  borderColor?: "gray" | "primary"; // 테두리 색
  align?: "left" | "center"; // 정렬
  direction?: "column" | "row";
  color?: "white" | "gray.900";
}

// 서비스 카드 컴포넌트
export default function ServiceCard({
  icon: Icon,
  iconBg = false,
  children,
  borderColor = "primary",
  align = "left",
  direction = "row",
  color = "gray.900",
}: ServiceCardProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: direction,
        justifyContent: align === "left" ? "flex-start" : "center",
        alignItems: "center",
        gap: direction === "row" ? "8px" : "12px",
        p: "24px",
        border: "1px solid",
        borderRadius: "8px",
        color: color,

        ...(borderColor === "gray" && {
          borderColor: "gray.300",
        }),

        ...(borderColor === "primary" && {
          borderColor: "orange.400",
        }),
      })}
    >
      {Icon && (
        <div
          className={css({
            p: iconBg ? "6px" : "0px",
            bg: iconBg ? "orange.50" : "none",
            borderRadius: iconBg ? "4px" : "0px",
          })}
        >
          <Icon width={iconBg ? 28 : 32} height={iconBg ? 28 : 32} className={css({})} />
        </div>
      )}
      {children}
    </div>
  );
}
