import Button from "@/components/ui/Button/Button";
import { css } from "@/styled-system/css";
import LeftPairWingIcon from "@/assets/svgs/left-pair-wing.svg";
import LeftWingIcon from "@/assets/svgs/left-wing.svg";
import RightPairWingIcon from "@/assets/svgs/right-pair-wing.svg";
import RightWingIcon from "@/assets/svgs/right-wing.svg";

// 페이지네이션 props 타입 정의
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

// 페이지네이션 컴포넌트
export default function Pagination({ currentPage, totalPages, onChange }: PaginationProps) {
  // 보여줄 페이지 버튼 수
  const pageRange = 5;

  // 시작 페이지 계산
  const startPage = Math.floor((currentPage - 1) / pageRange) * pageRange + 1;

  const endPage = Math.min(startPage + pageRange - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div
      className={css({
        display: "flex",
        columnGap: "4px",
      })}
    >
      {/* 처음 */}
      <Button
        variant="outline"
        aria-label="첫 페이지"
        className={css({
          width: "32px",
          height: "32px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "0px",
          bg: "white",
        })}
        onClick={() => onChange(1)}
        disabled={currentPage === 1}
      >
        <LeftPairWingIcon />
      </Button>

      {/* 이전 */}
      <Button
        variant="outline"
        aria-label="이전 페이지"
        className={css({
          width: "32px",
          height: "32px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "0px",
          bg: "white",
        })}
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <LeftWingIcon />
      </Button>

      {/* 페이지 번호 */}
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onChange(page)}
          variant={page === currentPage ? "primary" : "outline"}
          className={css({
            width: "32px",
            height: "32px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "0px",
            bg: "white",

            color: page === currentPage ? "" : "gray.400",
            fontWeight: page === currentPage ? "bold" : "",
            fontSize: {
              base: "12px",
              md: "14px",
            },
          })}
        >
          {page}
        </Button>
      ))}

      {/* 다음 */}
      <Button
        variant="outline"
        aria-label="다음 페이지"
        className={css({
          width: "32px",
          height: "32px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "0px",
          bg: "white",
        })}
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <RightWingIcon width={16} height={16} />
      </Button>

      {/* 마지막 */}
      <Button
        variant="outline"
        aria-label="마지막 페이지"
        className={css({
          width: "32px",
          height: "32px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: "0px",
          bg: "white",
        })}
        onClick={() => onChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <RightPairWingIcon />
      </Button>
    </div>
  );
}
