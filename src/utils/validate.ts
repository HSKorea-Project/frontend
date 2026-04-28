import { FILE_TYPE } from "@/constants/fileType";

// 문의내역 글 비밀번호
export const validatePassword = (password: string) => {
  if (!password) return null;
  if (password.length < 4) return "비밀번호는 최소 4자리 이상이어야 합니다.";
  return null;
};

export const validateConfirmPassword = (password: string, confirmPassword: string) => {
  if (!confirmPassword) return null;
  if (password !== confirmPassword) return "비밀번호가 일치하지 않습니다.";
  return null;
};

export const validateFileType = (file: File | null) => {
  if (!file) return null;

  if (!FILE_TYPE.includes(file.type)) {
    return "PDF 또는 png, jpg, jpeg, webp 형식의 이미지 파일만 업로드 가능합니다.";
  }

  return null;
};
