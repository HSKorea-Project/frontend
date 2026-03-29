import { css } from "@/styled-system/css";

// Icon Props 타입 정의
interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

// Icon 컴포넌트
export default function Icon({ name, size = 14, className }: IconProps) {
  return (
    <img
      src={`/${name}.svg`}
      alt={name}
      className={`${css({
        display: "inline-block",
        flexShrink: 0,

        // 반응형 사이즈
        width: {
          base: `${size - 2}px`, // 모바일
          md: `${size}px`, // 데스크탑
        },
        height: {
          base: `${size - 2}px`,
          md: `${size}px`,
        },
      })} ${className || ""}`}
    />
  );
}
