"use client";

import { useEffect } from "react";

// 모달 외부 스크롤 방지 훅
export function usePreventScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
}
