"use client";

import { Mail, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import {Logo} from "@/components/layout/logo";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: any;
  label: string;
  url: string;
}

const navigationLinks: FooterLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#project" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "Email",
    url: "mailto:emmanuelsomuah@example.com"
  },
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/emmanuelsomuah"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/emmanuelsomuah"
  },
  {
    icon: Twitter,
    label: "Twitter",
    url: "https://twitter.com/emmanuelsomuah"
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <Logo/>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fullstack Developer crafting scalable, secure, and user-centric web applications.
              Specializing in Java, Spring Boot, React, and modern web technologies.
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
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border my-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Emmanuel Somuah. All rights reserved.
          </p>

          {/* Additional Links */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </footer>
  );
}