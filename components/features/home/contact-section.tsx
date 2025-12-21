"use client";

import {Mail, Github, Linkedin, Send, User, Instagram, type LucideIcon} from "lucide-react";
import {useState} from "react";
import {EMAIL_URL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL} from "@/lib/costants";
import Link from "next/link";
import { toast } from "sonner"
import CtaButton from "@/components/shared/cta-button";
import dynamic from "next/dynamic";

const Spinner = dynamic(
  () => import("@/components/ui/spinner").then(mod => mod.Spinner),
  { ssr: false }
);

interface SocialLink {
  icon: LucideIcon;
  label: string;
  url: string;
  color: string;
}

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "Email",
    url: EMAIL_URL,
    color: "hover:text-red-500"
  },
  {
    icon: Github,
    label: "GitHub",
    url: GITHUB_URL,
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: LINKEDIN_URL,
    color: "hover:text-blue-600"
  },
  {
    icon: Instagram,
    label: "Instagram",
    url: INSTAGRAM_URL,
    color: "hover:text-pink-500"
  }
];

export default function ContactSection() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const { fullName, email, message } = formData;

    if (!fullName || !email || !message) {
      toast.warning("Please fill all required fields");
      return;
    }

    try {
      setIsSending(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      await sleep(3000);

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully");
      setFormData({ fullName: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsSending(false);
    }
  };


  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="section-parent-header text-center">
          <h2 className="section-header">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-card p-4 md:p-8 space-y-4 md:space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  {`Let's Connect`}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {`I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your vision. Whether you need a fullstack developer or just want to say hi, I'll try my best to get back to you!`}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Connect on Social Media
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{social.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-card p-8">
            <div className="space-y-6">

              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  disabled={isSending}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  disabled={isSending}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Send className="w-4 h-4 text-primary" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>

              <CtaButton
                onClick={handleSubmit}
                disabled={isSending}
                className={"w-full flex"}
                label={isSending ? (
                  <span className={"flex gap-2"}>
                    <Spinner/> Sending..
                  </span>
                ) : "Send Message"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}