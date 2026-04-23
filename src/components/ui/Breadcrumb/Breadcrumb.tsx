import RightWingIcon from "@/assets/svgs/right-wing.svg";
import { css } from "@/styled-system/css";

// Breadcrumb Props 타입 정의
interface BreadcrumbProps {
  currentPageName: string;
}

// Breadcrumb 컴포넌트
export default function Breadcrumb({ currentPageName }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={css({
        display: "flex",
        fontSize: { base: "12px", md: "16px" },
      })}
    >
      <ol className={css({ display: "flex", alignItems: "center", gap: "4px" })}>
        <li
          className={css({
            color: "white",
          })}
        >
          홈
        </li>
        <RightWingIcon width={24} height={24} fill="#fff" />
        <li
          aria-current="page"
          className={css({
            color: "orange.400",
          })}
        >
          {currentPageName}
        </li>
      </ol>
    </nav>
  );
}
