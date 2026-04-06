import { css } from "@/styled-system/css";

// 테이블 전체 wrapper props 타입 선언
interface TableProps {
  children: React.ReactNode;
}

// 테이블 전체 wrapper
export default function Table({ children }: TableProps) {
  return (
    <table
      className={css({
        width: "100%",
        borderCollapse: "collapse",
      })}
    >
      {children}
    </table>
  );
}
