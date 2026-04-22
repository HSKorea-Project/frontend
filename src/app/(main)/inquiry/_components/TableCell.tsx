import { css, cx } from "@/styled-system/css";

// 테이블 셀 props 타입 정의
interface TableCellProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

// 테이블 셀 컴포넌트
export default function TableCell({ children, align = "center", className }: TableCellProps) {
  return (
    <td
      className={cx(
        css({
          textAlign: align,
          padding: "12px 16px",
          fontSize: {
            base: "12px",
            md: "14px",
          },
          color: "gray.700",
        }),
        className
      )}
    >
      {children}
    </td>
  );
}
