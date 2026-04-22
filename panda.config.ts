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
          orange: {
            50: { value: "#FEF7E6" },
            100: { value: "#FDE9B3" },
            200: { value: "#FAD07A" },
            300: { value: "#F5B233" },
            400: { value: "#F0A500" },
            500: { value: "#E09000" },
            600: { value: "#CC7A00" },
            700: { value: "#B36200" },
            800: { value: "#8F4C00" },
            900: { value: "#6B3800" },
          },
          gray: {
            50: { value: "#F8F9FA" },
            100: { value: "#F1F3F5" },
            200: { value: "#E9ECEF" },
            300: { value: "#DEE2E6" },
            400: { value: "#CED4DA" },
            500: { value: "#ADB5BD" },
            600: { value: "#868E96" },
            700: { value: "#495057" },
            800: { value: "#343A40" },
            900: { value: "#212529" },
          },
          error: {
            50: { value: "#F8F9FA" },
            500: { value: "#E05252" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
