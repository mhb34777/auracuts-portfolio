import { Film } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-[#0b0c10] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center space-x-2">
          <Film className="h-5 w-5 text-[#00f2fe]" />
          <span className="font-mono text-lg font-bold tracking-wider text-white">
            Hamza <span className="text-[#00f2fe]">Bhatti</span>
          </span>
        </div>

        <p className="text-center font-mono text-xs text-gray-500">
          © 2026 Hamza Bhatti. Professional Video Editor.
        </p>

        <div className="flex items-center space-x-4 text-gray-400">
          <a
            href="https://www.facebook.com/bhatti.g.771282"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#00f2fe]"
            aria-label="Facebook"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/hamza_bhatti_3412?xtok=MXBvOGUxbmNocjdkYw=="
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#00f2fe]"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
