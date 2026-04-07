// 이름 마스킹 훅
export const useMaskedName = () => {
  const maskName = (name: string): string => {
    if (!name) return "";

    const length = name.length;

    // 1글자: 그대로
    if (length === 1) return name;

    // 2글자: 뒤만 마스킹
    if (length === 2) {
      return name[0] + "*";
    }

    // 3글자 이상: 가운데 마스킹
    const first = name[0];
    const last = name[length - 1];
    const middle = "*".repeat(length - 2);

    return first + middle + last;
  };

  return { maskName };
};
