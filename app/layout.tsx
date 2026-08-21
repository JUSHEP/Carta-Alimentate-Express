import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurante",
  description: "Carta digital del restaurante",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
} 