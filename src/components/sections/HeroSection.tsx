"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Briefcase, Play } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
});

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleNav = (id: string) => {
    onNavigate(id);
    scrollToSection(id);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.08)_0%,transparent_55%)]" />
      <HeroCanvas />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 text-left sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div>
          <div className="mb-6 inline-flex animate-pulse items-center space-x-2 rounded-full border border-[#00f2fe]/40 bg-gray-900/80 px-3 py-1.5 font-mono text-xs tracking-wider text-[#00f2fe] uppercase shadow-lg shadow-[#00f2fe]/10 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#00f2fe]" />
            <span>Professional Video Editor Available for Projects</span>
          </div>

          <h1 className="hero-name mb-6 text-3xl leading-tight font-semibold tracking-wide text-white sm:text-4xl md:text-5xl">
            Muhammad Hamza Bhatti
            <span className="hero-signature mt-2 block bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#ffb703] bg-clip-text text-xl font-normal text-transparent sm:text-2xl md:text-3xl">
              <b>Professional Video Editor &amp; Visual Storyteller</b>
            </span>
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-relaxed font-light text-gray-300 sm:text-lg">
            <b>
              Creative Video Editor with 5+ years of experience creating engaging and professional videos.
Skilled in Adobe Premiere Pro, After Effects, and AI tools.
Passionate about turning raw footage into attractive and high-quality videos.
            </b>
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => handleNav("portfolio")}
              className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] px-8 py-4 font-extrabold tracking-wider text-black shadow-lg shadow-[#00f2fe]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#00f2fe]/50 sm:w-auto"
            >
              <Play className="h-5 w-5 fill-current" />
              <span>View My Work</span>
            </button>

            <button
              type="button"
              onClick={() => handleNav("contact")}
              className="flex w-full items-center justify-center space-x-2 rounded-xl border border-gray-700 bg-gray-900/80 px-8 py-4 font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-[#ffb703] hover:text-white sm:w-auto"
            >
              <Briefcase className="h-5 w-5 text-[#ffb703]" />
              <span>Contact Me</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 border-t border-gray-800/80 pt-6 sm:gap-4">
            {[
              { value: "5+", label: "Years Experience", color: "text-[#00f2fe]" },
              { value: "4", label: "Core Editing Tools", color: "text-[#4facfe]" },
              { value: "CIN", label: "Cinematic Editing", color: "text-[#ffb703]" },
              { value: "SOC", label: "Social Content", color: "text-emerald-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-gray-800/60 bg-gray-900/40 p-3 backdrop-blur-sm transition hover:border-[#00f2fe]/30"
              >
                <div className={`font-mono text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[34rem] lg:ml-auto">
          <Image
            src="/aa.png"
            alt="Illustration of a video editor working at a laptop"
            width={1280}
            height={1280}
            priority
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
