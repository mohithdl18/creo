"use client";

const reasons = [
  {
    title: "Senior Creative on Every Brief",
    description:
      "A senior creative leads every project — never juniored, never templated. The person you meet in the pitch is the person who makes your work.",
  },
  {
    title: "Complete Creative Solutions",
    description:
      "Strategy, content, production, media, and tech — all in one studio. No briefing five vendors. No version confusion. One team, one vision, one result.",
  },
  {
    title: "Fast & Scalable Execution",
    description:
      "Built to ship daily, weekly, monthly — without quality drift. Our systems scale with your brand. Rush doesn't mean compromise at CREO.",
  },
  {
    title: "Performance-Focused Marketing",
    description:
      "Every campaign tied to a metric — reach, leads, revenue, retention. We don't celebrate views. We celebrate the numbers that show up in your P&L.",
  },
  {
    title: "AI + Human Creativity",
    description:
      "AI accelerates the work. Humans give it taste, judgment, and craft. The result: more ideas, faster production, and output that never feels machine-made.",
  },
  {
    title: "Modern Market Understanding",
    description:
      "We read the market in real time — culture, format, platform, taste. We know what's trending before your competitors brief their agencies.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full bg-black py-24">
  <div className="px-[80px]">
    <div className="flex items-start gap-10">

      {/* Label */}
      <div className="shrink-0 pt-4">
        <span className="text-[#e2e3e5] uppercase text-sm tracking-wide">
          (Why Us)
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-[#e2e3e5] text-[100px] leading-[0.92] tracking-[-0.06em] font-semibold max-w-[1400px]">
          Why "one project" rarely stays <br />
          <span className="relative top-5 bg-[#FCB724] text-black px-2">one project</span>
        </h2>

        <div className="grid grid-cols-3 gap-6 mt-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/[0.08] p-8 min-h-[280px] flex flex-col justify-between backdrop-blur-md hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-300"
            >
              <div>
                <span className="text-[#6f6f6f] text-sm tracking-[0.15em] uppercase">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-[#e2e3e5] text-[32px] leading-[1] tracking-[-0.04em] font-semibold">
                  {reason.title}
                </h3>
              </div>

              <p className="mt-10 text-[#a9a9a9] text-[18px] leading-[1.35] tracking-[-0.02em]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  );
}