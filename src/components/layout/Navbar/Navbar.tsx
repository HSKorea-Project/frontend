"use client";

import { useState } from "react";
import { css } from "@/styled-system/css";
import Drawer from "./Drawer";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/ui/Icon/Icon";

interface NavbarProps {
  className?: string;
}

// Navbar 컴포넌트
export default function Navbar({ className }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`${css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: {
            base: "20px",
            lg: "32px",
          },
          py: {
            base: "8px",
            lg: "16px",
          },
          borderBottom: "1px solid",
          borderColor: "gray.200",
          bg: "white",
        })} 
        ${className}`}
      >
        {/* 로고 */}
        <span
          className={css({
            fontWeight: "bold",
            color: "green.500",
          })}
        >
          HSKorea
        </span>

        {/* Desktop: 메뉴 */}
        <div
          className={css({
            display: { base: "none", md: "block" },
            flexDirection: "row",
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
        <Link
          href="/inquiry/new"
          className={css({
            display: { base: "none", md: "block" },
          })}
        >
          <Button>견적문의</Button>
        </Link>

        {/* Mobile: 햄버거 */}
        <button
          onClick={() => setOpen(true)}
          className={css({
            display: { base: "block", md: "none" },
            width: "40px",
            height: "40px",
            cursor: "pointer",
          })}
        >
          <Icon name="menu" />
        </button>
      </nav>

      {/* Drawer */}
      <Drawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
