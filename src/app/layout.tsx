import ModalProvider from "@/components/modal/ModalProvider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "에이치에스코리아",
  description: "에이치에스코리아 이사 견적 문의",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <ModalProvider />
      </body>
    </html>
  );
}
