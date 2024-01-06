import "./globals.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todo App",
  description: "A Full-stack Todo App using NextJs, Prisma, and MongoDB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
