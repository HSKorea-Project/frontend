import Navbar from "@/components/layout/Navbar/Navbar";
import { css } from "@/styled-system/css";

// 로그인 전용 레이아웃
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        overflow: "hidden",
      })}
    >
      <Navbar
        className={css({
          position: "sticky",
          top: "0",
        })}
      />
      <main
        className={css({
          display: "flex",
          flex: 1,
          overflow: "hidden",
        })}
      >
        {children}
      </main>
    </div>
  );
}
