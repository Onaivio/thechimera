import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./boska.css";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { ThemeProvider } from "@/components/shared/theme-provider";
import CursorPointer from "@/components/animation/CursorPointer";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Chimera Company | Luxury Event Management",
  description: "Bespoke. Luxury. Destination Event Management. We design and deliver exceptional experiences for clients who value detail, discretion, and distinction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorPointer />
          <ThemeToggle />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
