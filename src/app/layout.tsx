import ModalProvider from "@/components/modal/ModalProvider";
import "./globals.css";

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
