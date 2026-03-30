import Button from "@/components/ui/Button/Button";
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
          paddingY: "16px",
        })}
      >
        {/* 헤더 */}
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "solid 1px",
            borderColor: "gray.100",
            paddingX: "16px",
            paddingBottom: "16px",
          })}
        >
          <span
            className={css({
              fontWeight: "bold",
              color: "green.500",
            })}
          >
            HSKorea
          </span>

          {/* 닫힘 버튼 */}
          <button
            onClick={onClose}
            className={css({
              cursor: "pointer",
              width: "36px",
              height: "36px",
              _hover: {
                bg: "gray.100",
                borderRadius: "md",
              },
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
            marginBottom: "16px",
          })}
        >
          <Link
            href="/about"
            className={css({
              p: "16px",
              _hover: {
                color: "gray.700",
                bg: "gray.100",
              },
            })}
          >
            회사소개
          </Link>
          <Link
            href="/service"
            className={css({
              p: "16px",
              _hover: {
                color: "gray.700",
                bg: "gray.100",
              },
            })}
          >
            서비스소개
          </Link>
          <Link
            href="/inquire"
            className={css({
              p: "16px",
              _hover: {
                color: "gray.700",
                bg: "gray.100",
              },
            })}
          >
            문의내역
          </Link>
        </div>

        {/* 버튼 */}
        <Link href="/estimate" className={css({ width: "100%", paddingX: "16px" })}>
          <Button fullWidth={true}>견적문의</Button>
        </Link>
      </div>
    </>
  );
}
