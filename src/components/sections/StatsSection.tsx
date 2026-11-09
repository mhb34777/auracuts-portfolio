const stats = [
  {
    value: "5+",
    label: "Years Experience",
    gradient: "from-[#00f2fe] to-[#4facfe]",
  },
  {
    value: "4",
    label: "Core Software Tools",
    gradient: "from-[#ffb703] to-amber-500",
  },
  {
    value: "CIN",
    label: "Cinematic Focus",
    gradient: "from-emerald-400 to-teal-400",
  },
  {
    value: "SOC",
    label: "Social Content Ready",
    gradient: "from-[#00f2fe] to-[#ffb703]",
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-gray-800 bg-gradient-to-r from-gray-950 via-[#0b0c10] to-gray-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6">
              <div
                className={`mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text font-mono text-4xl font-black text-transparent sm:text-5xl`}
              >
                {stat.value}
              </div>
              <div className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
