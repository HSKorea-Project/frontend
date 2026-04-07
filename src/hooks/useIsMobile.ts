"use client";

// 모바일 여부 판단 훅
import { useMediaQuery } from "./useMediaQuery";

export const useIsMobile = (): boolean => {
  return useMediaQuery("(max-width: 768px)");
};
