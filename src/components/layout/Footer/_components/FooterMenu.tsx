import Link from "next/link";
import { css } from "@/styled-system/css";
import { FooterMenuItem } from "@/constants/footer";

// Footer 메뉴 컴포넌트
export default function FooterMenu({ title, items }: { title: string; items: FooterMenuItem[] }) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        rowGap: "16px",
      })}
    >
      <p
        className={css({
          color: "white",
          fontSize: "12px",
          fontWeight: "semibold",
          letterSpacing: "1px",
        })}
      >
        {title}
      </p>

      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          rowGap: "12px",
        })}
      >
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={css({
              color: "white/80",
              fontSize: "12px",
            })}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
