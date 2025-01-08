import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reveri",
  description: "Journal your daydreams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-[url('/bg.webp')] opacity-50 fixed -z-10 inset-0"/>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-orange-300 py-12 bg-opacity-10">
          <div className="mx-auto px-4 text-gray-900 text-center">
            <p>Created by PUNNU</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
