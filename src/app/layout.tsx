import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apresentação pessoal",
  description: "Website de apresentação pessoal do Henrique Costa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
