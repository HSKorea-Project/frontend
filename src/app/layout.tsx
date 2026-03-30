import Navbar from "@/components/layout/Navbar/Navbar";
import "./globals.css";
import { css } from "@/styled-system/css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Navbar
          className={css({
            position: "sticky",
            top: "0",
          })}
        />
        {children}
      </body>
    </html>
  );
}
