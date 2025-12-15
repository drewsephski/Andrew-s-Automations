import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Layout } from "@/components/craft";
import { Analytics } from "@vercel/analytics/react";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { StyledLink } from "@/components/styled-link";
import { Toaster } from "@/components/ui/toaster";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://andrews-automations.com"),
  title: "Andrew's Automations :: AI-Powered App Marketplace",
  description:
    "Discover and deploy AI-powered applications and automation tools. Engineering studio building modern web apps with authentication, payments, and AI integrations.",
  keywords: ["AI apps", "automation", "web development", "SaaS", "no-code", "AI tools", "app marketplace"],
  creator: "Drew Sepeczi",
  authors: [{ name: "Drew Sepeczi" }],
  openGraph: {
    title: "Andrew's Automations - AI App Marketplace",
    description: "Browse and deploy AI-powered applications and automation tools",
    type: "website",
    url: "https://andrews-automations.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew's Automations",
    description: "AI-powered app marketplace and automation tools",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className={GeistSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="mb-12 flex flex-col justify-center items-center gap-6 p-6 md:gap-12">{children}</main>
          <Footer />
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </Layout>
  );
}

const Nav = () => {
  return (
    <div className="sticky left-0 right-0 top-0 z-50 bg-gradient-to-b from-background to-background/0 px-6 py-4 fade-in">
      <div className="mt-4 flex justify-between gap-2">
        <h1>
          <Link className="dark:text-yellow-200" href="/">
            <Image
              src="/logo.svg"
              alt="Andrew's Automations logo"
              className="invert transition-all hover:scale-105 hover:opacity-75 dark:invert-0"
              width={56}
              height={35.26}
            />
            <span className="sr-only">Andrew&apos;s Automations</span>
          </Link>
        </h1>
        <div className="flex items-center gap-4">
          <Links />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="z-20 flex flex-col justify-between gap-2 p-6 text-sm fade-in md:flex-row md:items-center">
      <h3>
        ©{" "}
        <span className="sr-only">
          <a href="https://cal.com/drew-sepeczi-gbmxql">Drew Sepeczi</a>
        </span>{" "}
        2025 Andrew&apos;s Automations
      </h3>
      <div className="hidden w-fit items-center gap-2 md:flex">
        <h3>AI App Marketplace</h3>
        <ModeToggle />
      </div>
    </div>
  );
};

const Links = () => {
  return (
    <div className="flex gap-4">
      <StyledLink href="/services">/ services</StyledLink>
      <StyledLink href="/about">/ about</StyledLink>
      <StyledLink href="/contact">/ contact</StyledLink>{" "}
    </div>
  );
};
