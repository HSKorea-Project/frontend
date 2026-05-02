import { css } from "@/styled-system/css";

// 섹션 제목 스타일
export const sectionTitleStyle = css({
  fontSize: "12px",
  fontWeight: "semibold",
  color: "gray.700",
});

// 본문 스타일
export const textStyle = css({
  fontSize: "12px",
  fontWeight: "regular",
  color: "gray.700",
  whiteSpace: "pre-line",
  wordBreak: "keep-all",
});

// 리스트 스타일
export const listStyle = css({
  fontSize: "12px",
  color: "gray.700",
  paddingLeft: "16px",
  listStyleType: "disc",
});

// 중첩 리스트 스타일
export const nestedListStyle = css({
  paddingLeft: "16px",
  listStyleType: "disc",
});
