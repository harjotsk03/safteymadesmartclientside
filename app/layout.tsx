import type { Metadata } from "next";
import { Poppins, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import CenteredNavbar from "@/components/ui/custom/navbar";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";
import { AuthProvider } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html
      lang="en"
      className={cn("font-sans", inter.variable, dmSans.variable)}
    >
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <SmoothScrollProvider>
            <CenteredNavbar />
            {children}
          </SmoothScrollProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
