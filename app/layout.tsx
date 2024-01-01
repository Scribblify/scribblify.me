import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Scribblify",
  description:
    "Scribblify - is an online publishing platform that allows writers to share their stories and perspectives with a global audience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased bg-zinc-100",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
