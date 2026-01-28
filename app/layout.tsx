import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./boska.css";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import { ThemeProvider } from "@/components/shared/theme-provider";
import CursorPointer from "@/components/animation/CursorPointer";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import ReactQueryProvider from "@/components/shared/react-query-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "http://localhost:3000").replace(
  /\/+$/,
  "",
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Chimera Company | Luxury Event Management",
    template: "%s | The Chimera Company",
  },
  description:
    "Bespoke. Luxury. Destination Event Management. We design and deliver exceptional experiences for clients who value detail, discretion, and distinction.",
  applicationName: "The Chimera Company",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "The Chimera Company",
    title: "The Chimera Company | Luxury Event Management",
    description:
      "Bespoke. Luxury. Destination Event Management. We design and deliver exceptional experiences for clients who value detail, discretion, and distinction.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chimera Company | Luxury Event Management",
    description:
      "Bespoke. Luxury. Destination Event Management. We design and deliver exceptional experiences for clients who value detail, discretion, and distinction.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <ReactQueryProvider>
            <CursorPointer />
            <ThemeToggle />
            <SmoothScroll>{children}</SmoothScroll>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
