import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import { css } from "@/styled-system/css";

// main 전용 레이아웃
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
      })}
    >
      <Navbar
        className={css({
          position: "sticky",
          top: "0",
          zIndex: 2,
        })}
      />
      <main
        className={css({
          display: "flex",
          flex: 1,
          overflow: "auto",

          bg: "gray.50",
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
