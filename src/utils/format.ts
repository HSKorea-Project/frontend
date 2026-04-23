// 전화번호 입력 시 숫자만 추출 + 자동 하이픈
export const formatPhoneNumber = (value: string): string => {
  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 3) {
    return numbers;
  }

  if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  }

  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
};

// 숫자만 추출
export const onlyNumber = (value: string): string => {
  return value.replace(/\D/g, "");
};

// 두자리 수로 변경
export const formatTwoDigit = (idx: number): string => {
  return String(idx).padStart(2, "0");
};
