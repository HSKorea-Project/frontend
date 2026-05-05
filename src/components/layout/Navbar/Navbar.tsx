"use client";

import { useState } from "react";
import { css, cx } from "@/styled-system/css";
import Drawer from "./Drawer";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import LogoIcon from "@/assets/svgs/logo.svg";
import MenuIcon from "@/assets/svgs/menu.svg";

interface NavbarProps {
  className?: string;
}

// Navbar 컴포넌트
export default function Navbar({ className }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={cx(
          css({
            display: "grid",
            gridTemplateColumns: { base: "1fr 1fr", md: "160px 1fr 160px" },
            alignItems: "center",
            px: {
              base: "20px",
              lg: "32px",
            },
            py: {
              base: "8px",
              lg: "16px",
            },
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "gray.200",
            bg: "white",
          }),
          className
        )}
      >
        {/* 로고 */}
        <Link
          href="/"
          className={css({
            display: "flex",
          })}
        >
          <LogoIcon
            className={css({
              height: "100%",
              fill: "orange.400",
            })}
          />
        </Link>

        {/* Desktop: 메뉴 */}
        <div
          className={css({
            display: { base: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              alignItems: "center",
              color: "gray.600",
              fontWeight: "medium",
              fontSize: "sm",
            })}
          >
            <Link
              href="/about"
              className={css({
                paddingX: "3",
                paddingY: "2",
                _hover: {
                  color: "gray.700",
                  bg: "gray.100",
                  borderRadius: "md",
                },
              })}
            >
              회사소개
            </Link>
            <Link
              href="/service"
              className={css({
                paddingX: "3",
                paddingY: "2",
                _hover: {
                  color: "gray.700",
                  bg: "gray.100",
                  borderRadius: "md",
                },
              })}
            >
              서비스소개
            </Link>
            <Link
              href="/inquiry"
              className={css({
                paddingX: "3",
                paddingY: "2",
                _hover: {
                  color: "gray.700",
                  bg: "gray.100",
                  borderRadius: "md",
                },
              })}
            >
              문의내역
            </Link>
          </div>
        </div>

        {/* 견적문의 버튼 */}
        <Link
          href="/inquiry/new"
          className={css({
            display: { base: "none", md: "flex" },
            justifyContent: "end",
          })}
        >
          <Button>견적 문의</Button>
        </Link>

        {/* Mobile: 햄버거 */}
        <button
          onClick={() => setOpen(true)}
          className={css({
            display: { base: "flex", md: "none" },
            justifyContent: "end",
            cursor: "pointer",
          })}
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Drawer */}
      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
