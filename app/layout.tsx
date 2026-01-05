import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CenteredNavbar from "@/components/ui/custom/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Safety Made Smart",
  description: "Modern safety consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <CenteredNavbar />
        {children}
      </body>
    </html>
  );
}
