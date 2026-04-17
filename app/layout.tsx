import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import CenteredNavbar from "@/components/ui/custom/navbar";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`${poppins.className} antialiased`}>
        <SmoothScrollProvider>
          <CenteredNavbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
