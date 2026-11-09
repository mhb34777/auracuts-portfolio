import type { Project, VideoItem } from "@/types";

export const showreelSample: VideoItem = {
  title: "Hamza Bhatti Showreel",
  category: "Portfolio Reel",
  duration: "01:45",
  videoUrl: "/videos/showcase.mp4",
  description:
    "A curated mix of cinematic storytelling, promotional edits, short-form reels, and polished visual edits from my workflow.",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Brand Promotion",
    category: "promotional",
    duration: "00:28",
    client: "Brand Campaign",
    thumbnail:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    description:
      "Promotional brand video tailored for visual impact, rhythm, and product-focused storytelling.",
    tags: ["Premiere Pro", "After Effects", "Brand Edit"],
    videoUrl: "/videos/brand-promotion.mp4",
  },
  {
    id: 2,
    title: "Real Estate Edit",
    category: "cinematic",
    duration: "00:32",
    client: "Property Showcase",
    thumbnail:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
    description:
      "Luxury real-estate visual edit using cinematic pacing, smooth transitions, and premium property presentation.",
    tags: ["Premiere Pro", "Cinematic", "Property Video"],
    videoUrl: "/videos/real-estate.mp4",
  },
  {
    id: 3,
    title: "Talking Head Edit",
    category: "youtube",
    duration: "00:40",
    client: "Interview / Talking Head",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description:
      "Clean talking-head edit focused on professional framing, rhythm, and audience-friendly pacing.",
    tags: ["Premiere Pro", "Interview Edit", "Story Flow"],
    videoUrl: "/videos/talking-head.mp4",
  },
  {
    id: 4,
    title: "Wedding Invitation Edit",
    category: "promotional",
    duration: "00:35",
    client: "Personal Event",
    thumbnail:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant invitation-style video designed with emotional storytelling, motion, and polished event aesthetics.",
    tags: ["CapCut Pro", "Event Edit", "Invitation"],
    videoUrl: "/videos/wedding-invitation.mp4",
  },
  {
    id: 5,
    title: "TikTok Edits",
    category: "short-form",
    duration: "00:22",
    client: "Social Media Content",
    thumbnail:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80",
    description:
      "Fast-cut short-form edits built for social media retention, trend energy, and visually engaging hooks.",
    tags: ["After Effect", "Shorts", "Trend Editing"],
    videoUrl: "/videos/tiktok-edits.mp4",
  },
  {
    id: 6,
    title: "Real Estate Shorts",
    category: "reels",
    duration: "00:18",
    client: "Social Reels",
    thumbnail:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description:
      "Short-form real-estate reel focused on quick property highlights and polished visual storytelling.",
    tags: ["Reels", "Property Highlights", "Fast Cut"],
    videoUrl: "/videos/real-estate-short.mp4",
  },
];

export const projectFilters = [
  { id: "all" as const, label: "All Projects" },
  { id: "cinematic" as const, label: "Cinematic Videos" },
  { id: "reels" as const, label: "Social Media Reels" },
  { id: "youtube" as const, label: "YouTube Videos" },
  { id: "promotional" as const, label: "Promotional Videos" },
  { id: "short-form" as const, label: "Short-Form Content" },
];
