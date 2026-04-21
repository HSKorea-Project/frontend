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
