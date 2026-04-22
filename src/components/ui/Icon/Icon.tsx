import { css, cx } from "@/styled-system/css";

type IconSize = "sm" | "md" | "lg";

const sizeMap = {
  sm: {
    base: "12px",
    md: "14px",
  },
  md: {
    base: "14px",
    md: "16px",
  },
  lg: {
    base: "16px",
    md: "20px",
  },
};

// Icon Props 타입 정의
interface IconProps {
  name: string;
  size?: IconSize;
  className?: string;
}

// Icon 컴포넌트
export default function Icon({ name, size = "md", className }: IconProps) {
  return (
    <img
      src={`/${name}.svg`}
      alt={name}
      className={cx(
        css({
          display: "inline-block",
          flexShrink: 0,
          width: sizeMap[size],
          height: sizeMap[size],
        }),
        className
      )}
    />
  );
}
