import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhaydesai.dev"),
  title: {
    default: "Abhay Desai — Full Stack Developer | Web Apps for Growing Businesses",
    template: "%s — Abhay Desai",
  },
  description:
    "Abhay Desai — Full Stack Developer building scalable web applications, dashboards, SaaS products and automation systems for startups and local businesses. Next.js, NestJS, PostgreSQL.",
  keywords: [
    "full stack developer",
    "freelance developer",
    "Next.js developer",
    "NestJS",
    "PostgreSQL",
    "web application development",
    "SaaS development",
    "business automation",
    "Abhay Desai",
  ],
  authors: [{ name: "Abhay Desai" }],
  openGraph: {
    title: "Abhay Desai — Full Stack Developer",
    description:
      "I build modern web applications, dashboards, SaaS products and automation systems that help businesses grow.",
    type: "website",
    url: "https://abhaydesai.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <RevealInit />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
