"use client";

import {Mail, Send, User} from "lucide-react";
import {useState} from "react";
import { toast } from "sonner"
import CtaButton from "@/components/shared/cta-button";
import dynamic from "next/dynamic";

const Spinner = dynamic(
  () => import("@/components/ui/spinner").then(mod => mod.Spinner),
  { ssr: false }
);

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default function ContactMe() {
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
    <section id="contact" className="">
      <div className="flex flex-col gap-4 md:gap-8">

        <div className="flex flex-col gap-4 md:gap-8">
          <div className="bg-card border border-border rounded-card p-2 md:p-8">
            <p className="text-muted-foreground leading-relaxed">
              {`I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your vision. Whatever you need, I'll try my best to get back to you! Feel Free to reach out`}
            </p>
            <div className="space-y-6 mt-4">

              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-primary"/>
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
                  <Mail className="w-4 h-4 text-primary"/>
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
                  <Send className="w-4 h-4 text-primary"/>
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