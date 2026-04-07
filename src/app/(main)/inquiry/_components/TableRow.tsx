import { css } from "@/styled-system/css";

// 테이블 행 props 타입 선언
interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// 테이블 행 컴포넌트
export default function TableRow({ children, className, onClick }: TableRowProps) {
  return (
    <tr
      onClick={onClick}
      className={`${css({
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "gray.200",
        _last: {
          borderBottom: "0px",
        },
      })} ${className}`}
    >
      {children}
    </tr>
  );
}
