import RightWingIcon from "@/assets/svgs/right-wing.svg";
import { css } from "@/styled-system/css";

// Breadcrumb Props 타입 정의
interface BreadcrumbProps {
  currentPageName: string;
}

// Breadcrumb 컴포넌트
export default function Breadcrumb({ currentPageName }: BreadcrumbProps) {
  return (
    <div
      className={css({
        display: "flex",
        fontSize: { base: "12px", md: "16px" },
      })}
    >
      <p
        className={css({
          color: "white",
        })}
      >
        홈
      </p>
      <RightWingIcon width={24} height={24} fill="#fff" />
      <p
        className={css({
          color: "orange.400",
        })}
      >
        {currentPageName}
      </p>
    </div>
  );
}
