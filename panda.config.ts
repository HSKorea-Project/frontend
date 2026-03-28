import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          green: {
            50: { value: "#f0faf4" }, // 배경, hover 상태
            100: { value: "#d9f2e3" }, // 뱃지 배경, 섹션 구분
            200: { value: "#b3e6c8" }, // 테두리, 구분선
            300: { value: "#7dd3a8" }, // focus ring, 업로드 버튼 테두리
            400: { value: "#4db87e" }, // input focus 테두리
            500: { value: "#2e9e61" }, // 기본 버튼, CTA (메인 컬러)
            600: { value: "#207a49" }, // hover 버튼, 텍스트 링크
            700: { value: "#165c36" }, // 섹션 타이틀, 강조 텍스트
          },
          gray: {
            50: { value: "#f8f9fa" }, // 페이지 배경
            100: { value: "#f1f3f5" }, // 카드 배경 (서브)
            200: { value: "#e9ecef" }, // 구분선
            300: { value: "#dee2e6" }, // input 기본 테두리
            400: { value: "#ced4da" }, // placeholder
            500: { value: "#adb5bd" }, // 보조 텍스트 (비활성)
            600: { value: "#868e96" }, // 서브 레이블
            700: { value: "#495057" }, // 폼 레이블
            800: { value: "#343a40" }, // 본문 텍스트
            900: { value: "#212529" }, // 제목
          },
          red: {
            500: { value: "#e05252" }, // 에러 메시지, 필수 표시
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
