import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Susiplanuok! – Įpročių ir tikslų planavimo šablonai",
  description:
    "Susiplanuok! – lietuviški įpročių, tikslų ir dienotvarkės planavimo šablonai Excel ir Google Sheets formatu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body
        className={`${poppins.className} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-white text-slate-900">
          <header className="border-b border-slate-200 bg-white/95">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="text-lg font-semibold tracking-tight uppercase">
                  <span className="text-slate-900">SUSIPLANUOK</span>
                  <span className="text-sky-600">!</span>
                </div>
              </div>
              <nav className="hidden items-center gap-3 text-xs font-medium text-slate-700 sm:flex">
                <a
                  href="#virsus"
                  className="rounded-full bg-slate-900/5 px-3 py-1.5 text-[11px] uppercase tracking-wide text-slate-900 shadow-sm hover:bg-slate-900/10"
                >
                  Pagrindinis
                </a>
                <a
                  href="#produktai"
                  className="rounded-full bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-wide hover:bg-slate-900/5 hover:text-slate-900"
                >
                  Įsigyti šablonus
                </a>
                <a
                  href="#kontaktai"
                  className="rounded-full bg-transparent px-3 py-1.5 text-[11px] uppercase tracking-wide hover:bg-slate-900/5 hover:text-slate-900"
                >
                  Kontaktai
                </a>
              </nav>
              <a
                href="#produktai"
                className="rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-500"
              >
                Pirkti dabar
              </a>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-slate-200 bg-white/95">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6">
              <p>
                © {new Date().getFullYear()} Susiplanuok!. Visos teisės saugomos.
              </p>
              <div className="flex gap-4">
                <a href="#kontaktai" className="hover:text-slate-800">
                  Privatumo politika
                </a>
                <a href="#kontaktai" className="hover:text-slate-800">
                  Pirkimo sąlygos
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
