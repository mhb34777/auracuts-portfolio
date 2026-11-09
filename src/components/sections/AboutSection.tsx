import { ArrowRight, Clapperboard, Sparkles, Wand2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-gray-900 bg-[#0b0c10] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-3 inline-flex items-center space-x-2 font-mono text-sm tracking-wider text-[#ffb703] uppercase">
              <Clapperboard className="h-4 w-4" />
              <span>About Me</span>
            </div>

            <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-5xl">
              Turning raw footage into compelling visual stories.
            </h2>

            <p className="mb-5 max-w-2xl text-base leading-relaxed text-gray-300">
              I am Muhamam Hamza Bhatti, a professional video editor with 5 years
              of experience transforming ideas into cinematic, engaging, and
              emotionally resonant visuals. My work blends storytelling, pacing,
              and technical precision to make every frame feel purposeful.
            </p>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400">
              From commercial edits and social-first content to motion graphics and
              richly graded cinematic sequences, I focus on clarity, emotion, and
              visual quality. I am passionate about helping brands, creators, and
              businesses communicate with impact through clean and professional editing.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-gray-200">
                <div className="mb-1 font-mono text-[10px] tracking-[0.2em] text-[#00f2fe] uppercase">
                  Expertise
                </div>
                <div className="font-semibold text-white">Storytelling & Editing</div>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 px-4 py-3 text-sm text-gray-200">
                <div className="mb-1 font-mono text-[10px] tracking-[0.2em] text-[#00f2fe] uppercase">
                  Strength
                </div>
                <div className="font-semibold text-white">Color & Motion Design</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-[#0b0c10] p-8 shadow-2xl shadow-black/40">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent" />
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[#ffb703] uppercase">
                  Creative Focus
                </div>
                <h3 className="mt-2 text-2xl font-bold text-white">What I bring</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00f2fe]/10 text-[#00f2fe]">
                <Wand2 className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Cinematic visual storytelling with emotion and structure.",
                "Precision editing for commercials, reels, and YouTube content.",
                "Color grading and motion design that elevate the final look.",
                "Clean communication, quick revisions, and creative reliability.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-gray-950/60 p-4"
                >
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#ffb703]/10 text-[#ffb703]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#00f2fe]">
              <span>Let&apos;s build your next story</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
