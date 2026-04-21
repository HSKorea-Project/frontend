import Input from "@/components/ui/Input/Input";
import { css } from "@/styled-system/css";

// 주소 Input Props 타입 정의
interface AddressInputProps {
  label: string;
  value: string;
  detailValue: string;
  onChange: (v: string) => void;
  onDetailChange: (v: string) => void;
  required?: boolean;
}

// 주소 입력 Input 컴포넌트
export default function AddressInput({
  label,
  value,
  detailValue,
  onChange,
  onDetailChange,
  required,
}: AddressInputProps) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      })}
    >
      {/* 주소  */}
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label={label}
        required={required}
        placeholder="주소 검색"
      />

      {/* 상세주소 */}
      <Input
        value={detailValue}
        onChange={(e) => onDetailChange(e.target.value)}
        placeholder="상세주소 입력 (선택)"
      />
    </div>
  );
}
