"use client";

import { Heart } from "lucide-react";
import {Logo} from "@/components/layout/logo";
import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const navigationLinks: FooterLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#project" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted dark:bg-card">
      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Logo/>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fullstack Developer crafting scalable, secure, and user-centric  applications. Specializing in Java, Spring Boot, NextJs, React Native and modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>


        </div>

        <div className="border-t border-border my-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Emmanuel Somuah. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href={"#privacy"}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href={"#terms"}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </footer>
  );
}