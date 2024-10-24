import type { Metadata } from "next";
import "./globals.css";
import {NavbarComponent} from "@/components";

export const metadata: Metadata = {
  title: "Apresentação pessoal | Henrique Costa",
  description: "Website de apresentação pessoal do Henrique Costa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-primary">
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
