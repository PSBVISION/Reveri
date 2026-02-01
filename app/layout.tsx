import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Victor_Mono } from "next/font/google";
import { ConvexClientProvider } from "@/components/web/ConvexClientProvider";

const victorMono  = Victor_Mono({
  variable: "--font-victor-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Reveri",
  description: "A platform to share and discover thoughts and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${victorMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 font-victor">
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
