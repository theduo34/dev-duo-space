"use client";

import { Mail, Github, Linkedin, Twitter, Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";

interface SocialLink {
  icon: any;
  label: string;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    label: "Email",
    url: "mailto:emmanuelsomuah@example.com",
    color: "hover:text-red-500"
  },
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/emmanuelsomuah",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/emmanuelsomuah",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    label: "Twitter",
    url: "https://twitter.com/emmanuelsomuah",
    color: "hover:text-sky-500"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="section-parent-header text-center">
          <h2 className="section-header">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Socials */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {`Let's Connect`}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {`I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your vision. Whether you need a fullstack
                    developer or just want to say hi, I'll try my best to get back to you!`}
                </p>
              </div>

              {/* Direct Email */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email me at</p>
                    <a
                      href="mailto:emmanuelsomuah@example.com"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      emmanuelsomuah@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Connect on Social Media
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative h-32 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Send className="w-16 h-16 text-primary/30" />
              </div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Message */}
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
                  rows={6}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="relative inline-flex overflow-hidden rounded-full focus:outline-none w-full p-[3px] group"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 backdrop-blur-3xl gap-2 shadow-md transition-colors duration-300 relative z-10 w-full">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}