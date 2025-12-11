import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-tools-rose.vercel.app/"),
  title: {
    default: "DevToolbox - Free Developer Tools & Utilities",
    template: "%s | DevToolbox"
  },
  description: "Free, fast, and privacy-focused developer tools. JSON formatter, Regex tester, Base64 encoder, JWT decoder, and more. All processing happens in your browser.",
  keywords: ["developer tools", "json formatter", "regex tester", "base64 encoder", "jwt decoder", "url encoder", "timestamp converter", "developer utilities"],
  authors: [{ name: "DevToolbox" }],
  creator: "DevToolbox",
  publisher: "DevToolbox",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dev-tools-rose.vercel.app/",
    title: "DevToolbox - Free Developer Tools & Utilities",
    description: "Free, fast, and privacy-focused developer tools. All processing happens in your browser.",
    siteName: "DevToolbox",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevToolbox - Free Developer Tools & Utilities",
    description: "Free, fast, and privacy-focused developer tools.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "LxuOQEkcgspypMsiFZi_lvCcVqPbLASfiZtkUY5DAHk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
