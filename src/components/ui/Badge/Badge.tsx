import { css } from "@/styled-system/css";

// Badge props 타입 정의
interface BadgeProps {
  content: string;
  type?: "primary" | "gray"; // badge 색상
  size?: "default" | "small"; // 폰트 사이즈
}

export default function Badge({ content, type = "primary", size = "default" }: BadgeProps) {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: "8px",
        width: "fit-content",
        height: "fit",
        paddingY: {
          base: "2px",
          md: "3px",
        },
        borderRadius: "full",
        fontSize: size === "default" ? "12px" : "10px",
        fontWeight: size === "default" ? "regular" : "bold",

        ...(type === "primary" && {
          bg: "orange.400",
          color: "white",
        }),

        ...(type === "gray" && {
          bg: "gray.100",
          color: "gray.600",
        }),
      })}
    >
      {content}
    </div>
  );
}
