import Icon from "@/components/ui/Icon/Icon";
import { css } from "@/styled-system/css";
import Link from "next/link";

// Drawer Props 타입 정의
interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

// 햄버거 버튼 클릭 시 활성화 되는 Drawer 컴포넌트
export default function Drawer({ open, onClose }: DrawerProps) {
  return (
    <>
      {/* 배경 (overlay) */}
      {open && (
        <div
          onClick={onClose}
          className={css({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bg: "black",
            opacity: "40%",
            zIndex: 1000,
          })}
        />
      )}

      {/* 슬라이드 패널 */}
      <div
        className={css({
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "50%",
          bg: "white",
          zIndex: 1001,

          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
        })}
      >
        {/* 헤더 */}
        <div
          className={css({
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            borderBottom: "solid 1px",
            borderColor: "gray.100",
            paddingX: "20px",
            paddingY: "12px",
          })}
        >
          {/* 닫힘 버튼 */}
          <button
            onClick={onClose}
            className={css({
              cursor: "pointer",
              width: "32px",
              height: "32px",
            })}
          >
            <Icon name="close" />
          </button>
        </div>

        {/* 메뉴 */}
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            fontWeight: "medium",
          })}
        >
          <Link
            href="/about"
            className={css({
              textAlign: "center",
              py: "16px",
              px: "20px",
              _hover: {
                color: "gray.700",
                bg: "gray.100",
              },
              fontSize: "12px",
              borderBottom: "solid 1px",
              borderColor: "gray.100",
            })}
          >
            회사소개
          </Link>
          <Link
            href="/service"
            className={css({
              textAlign: "center",
              py: "16px",
              px: "20px",
              _hover: {
                color: "gray.700",
                bg: "gray.100",
              },
              fontSize: "12px",
              borderBottom: "solid 1px",
              borderColor: "gray.100",
            })}
          >
            서비스소개
          </Link>
          <Link
            href="/inquiry"
            className={css({
              textAlign: "center",
              py: "16px",
              px: "20px",
              _hover: {
                color: "gray.700",
                bg: "gray.100",
              },
              fontSize: "12px",
              borderBottom: "solid 1px",
              borderColor: "gray.100",
            })}
          >
            문의목록
          </Link>
          <Link
            href="/inquiry/new"
            className={css({
              textAlign: "center",
              py: "16px",
              px: "20px",
              _hover: {
                color: "gray.700",
                bg: "gray.100",
              },
              fontSize: "12px",
              borderBottom: "solid 1px",
              borderColor: "gray.100",
            })}
          >
            견적문의
          </Link>
        </div>
      </div>
    </>
  );
}
