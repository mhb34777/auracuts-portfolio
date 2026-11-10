"use client";

import { FormEvent, useState } from "react";
import { CheckCircle, Mail, Send } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

interface ContactSectionProps {
  onDeployClick: () => void;
}

export default function ContactSection({ onDeployClick }: ContactSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent. Please try again.");
      }

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/bhatti.g.771282", icon: FacebookIcon },
    { label: "Instagram", href: "https://www.instagram.com/hamza_bhatti_3412?xtok=MXBvOGUxbmNocjdkYw==", icon: InstagramIcon },
  ];

  return (
    <section
      id="contact"
      className="border-t border-gray-900 bg-gradient-to-b from-[#0b0c10] via-gray-950 to-[#0b0c10] py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-3 inline-flex items-center space-x-2 font-mono text-sm tracking-wider text-[#00f2fe] uppercase">
              <Send className="h-4 w-4" />
              <span>Contact Me</span>
            </div>
            <h2 className="mb-6 text-3xl leading-tight font-extrabold text-white sm:text-5xl">
              Let&apos;s build your next visual story.
            </h2>
            <p className="mb-8 text-base leading-relaxed font-light text-gray-400">
              Whether you need cinematic edits, branded social reels, motion graphics,
              or polished promotional content, I&apos;m ready to turn your vision into a
              visually compelling final product.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-[#00f2fe]" />
                <a href="mailto:mhb34000@gmail.com" className="transition hover:text-[#00f2fe]">
                  mhb34000@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Send className="h-5 w-5 text-[#ffb703]" />
                <span>Available for freelance, brand, and social projects</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/70 px-3 py-2 text-xs font-medium text-gray-200 transition hover:border-[#00f2fe]/50 hover:text-[#00f2fe]"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>

            {/* <div className="mt-8 flex items-center justify-between rounded-xl border border-gray-800 bg-gray-900/80 p-4">
              <div>
                <div className="text-xs font-bold text-white">
                  Need a portfolio deployment guide?
                </div>
                <div className="text-xs text-gray-400">
                  Quick GitHub setup walkthrough.
                </div>
              </div>
              <button
                type="button"
                onClick={onDeployClick}
                className="rounded bg-[#00f2fe] px-3 py-1.5 font-mono text-xs font-bold text-black transition hover:bg-[#4facfe]"
              >
                View Guide
              </button>
            </div> */}
          </div>

          <div className="relative rounded-3xl border border-gray-800 bg-gray-900/60 p-8 shadow-2xl sm:p-10 lg:col-span-7">
            {formSubmitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 animate-bounce text-[#00f2fe]" />
                <h3 className="mb-2 text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-gray-400">
                  Thank you for reaching out. I will review your project details and get
                  back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                  aria-hidden="true"
                >
                  <label>
                    Leave this field empty
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={100}
                      placeholder="Alice Johnson etc."
                      className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={254}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs tracking-wider text-gray-400 uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    maxLength={5000}
                    placeholder="Tell me about your project, timeline, platform, and the kind of editing you need..."
                    className="w-full rounded-xl border border-gray-800 bg-gray-950 px-4 py-3 text-sm text-white transition focus:border-[#00f2fe] focus:outline-none"
                  />
                </div>

                {formError && (
                  <p role="alert" className="text-sm text-red-300">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] py-4 text-sm font-extrabold tracking-wider text-black shadow-lg shadow-[#00f2fe]/20 transition duration-200 hover:scale-[1.01] hover:shadow-[#00f2fe]/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4 fill-current" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
