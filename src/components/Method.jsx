"use client";

const steps = [
  {
    number: "01",
    title: "Brains Before Buttons",
    description:
      "Before a single pixel is touched, we map positioning, audience architecture, and narrative framework. We don't execute without knowing exactly who we're talking to and what we want them to do.",
    tags: "Positioning · Audience · Narrative",
    image: "/m1.png",
    position: "-top-22 -left-24 rotate-[-12deg]",
  },
  {
    number: "02",
    title: "Pretty, But Make It Useful",
    description:
      "Every concept is engineered to convert — not just to look good. We ask: will this move the audience? Will this move the metric? If the answer to both isn't yes, it doesn't ship.",
    tags: "Concepts · Conversion · Craft",
    image: "/m2.png",
    position: "-top-8 -right-15 rotate-[8deg]",
  },
  {
    number: "03",
    title: "Powered by Humans & Machines",
    description:
      "AI handles the speed. Humans handle the taste, judgment, and final cut. We produce in days what used to take weeks — without the quality drift.",
    tags: "Speed · Scale · Precision",
    image: "/m3.png",
    position: "-bottom-12 -left-28 rotate-[15deg]",
  },
  {
    number: "04",
    title: "Every Click Counts",
    description:
      "Every campaign is tied to a metric from day one — reach, CPL, ROAS, retention. We don't report on vanity. We report on revenue.",
    tags: "Measured · Transparent · Accountable",
    image: "/m4.png",
    position: "-top-8 -right-10 rotate-[-8deg]",
  },
  {
    number: "05",
    title: "Crafted, Not Cranked Out",
    description:
      "In-house, cinematic, end-to-end. We don't outsource the craft. Every deliverable is reviewed against a standard most agencies never set for themselves.",
    tags: "Cinematic · In-House · End-to-End",
    image: "/m5.png",
    position: "-bottom-16 right-10 rotate-[12deg]",
  },
];

export default function StrategySection() {
  return (
    <section className="w-full bg-black py-20">
      <div className="px-[80px]">
        <div className="ml-[100px] grid grid-cols-[0.9fr_1.1fr] gap-3">
          {/* Sticky Left Side */}
          <div className="sticky top-0 h-screen flex flex-col justify-center">
            <span className="text-[#e2e3e5] uppercase text-sm tracking-wide mb-8">
              (Strategy)
            </span>

            <h2 className="text-[#e2e3e5] text-[90px] leading-[0.92] tracking-[-0.06em] font-semibold">
              THE CREO
              <br />
              METHOD
            </h2>

            <p className="mt-6 text-[#8a8a8a] text-[28px] tracking-[-0.03em]">
              Less chaos.
              <br />
              More clarity.
            </p>
          </div>

          {/* Scrolling Cards */}
          <div className="space-y-8 py-[20vh] -ml-24">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Floating Image */}
                <img
                  src={step.image}
                  alt=""
                  className={`absolute ${step.position} w-[180px] pointer-events-none select-none z-20`}
                />

                {/* Card */}
                <div className="min-h-[350px] bg-white/5 backdrop-blur-md border border-white/10 p-10 flex flex-col justify-between shadow-lg hover:border-white/20 transition-all duration-300">
                  <div>
                    <p className="text-[#777777] text-[18px] font-medium mb-8">
                      {step.number}
                    </p>

                    <h3 className="text-[#e2e3e5] text-[48px] leading-[0.95] tracking-[-0.04em] font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-8 text-[#b5b5b5] text-[22px] leading-[1.3] tracking-[-0.02em]">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <p className="text-[#7c7c7c] uppercase tracking-[0.15em] text-sm">
                      {step.tags}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}