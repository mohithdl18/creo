"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caseStudies = [
  {
    id: "01",
    image: "/work1.png",
    category: "Lifestyle & Fashion",
    title: "Turning a Saree Brand Into a Social Movement",
    problem:
      "A premium ethnic fashion label had stunning products but zero digital reach. The objective was to build a recognizable brand identity, grow an engaged audience, and turn social media into a powerful sales channel.",

    services: [
      "Brand Identity",
      "Social Media",
      "Product Photography",
      "Meta Campaigns",
      "Content Strategy",
    ],

    result: "10M+",
    resultDesc: "People reached across platforms · 2-year campaign",

    stats: [
      {
        value: "100%",
        label: "Monthly Follower Growth",
      },
      {
        value: "15%",
        label: "Growth in Sales",
      },
      {
        value: "10M+",
        label: "Total Reach",
      },
    ],

    quote:
      "CREO gave our industrial brand a voice that speaks to engineers and decision-makers alike. The results in reach and sales have been beyond what we expected.",

    author: "Resort Director, Hospitality Client",
    reverse: false,
  },

  {
    id: "02",
    image: "/work2.png",
    category: "Restaurants & F&B",
    title: "Building a Restaurant Brand from Zero to Full Tables",
    problem:
      "A growing restaurant brand needed a consistent content engine, a social presence that matched the quality of their food, and paid campaigns to drive walk-ins and delivery orders — all built and scaled over 24 months.",

    services: [
      "Brand Identity",
      "Social Media",
      "Product Photography",
      "Meta Campaigns",
      "Content Strategy",
    ],

    result: "22M+",
    resultDesc: "People reached across platforms · 2-year campaign",

    stats: [
      {
        value: "180%",
        label: "Monthly Follower Growth",
      },
      {
        value: "65%",
        label: "Growth in Sales",
      },
      {
        value: "22M+",
        label: "Total Reach",
      },
    ],

    quote:
      "CREO didn't just shoot our food — they built a brand around it. Our tables fill up now because people see our content and have to come in.",

    author: "Restaurant Owner, F&B Client",
    reverse: false,
  },

  {
    id: "03",
    image: "/work3.png",
    category: "Lifestyle & Fashion",
    title: "Turning a Saree Brand Into a Social Movement",
    problem:
      "A premium ethnic fashion label had stunning products but zero digital reach. They needed editorial-quality content, a social identity rooted in Indian heritage, and a performance engine that could convert organic love into daily sales. CREO delivered all three — consistently, over 24 months.",

    services: [
      "Fashion Photography",
      "Social Media",
      "Reels Production",
      "Meta Campaigns",
      "Content Strategy",
    ],

    result: "50M+",
    resultDesc: "People reached across platforms · 2-year campaign",

    stats: [
      {
        value: "300%",
        label: "Monthly Follower Growth",
      },
      {
        value: "60%",
        label: "Growth in Sales",
      },
      {
        value: "50M+",
        label: "Total Reach",
      },
    ],

    quote:
      "We went from being a hidden gem to a brand people actively search for. CREO's content didn't just grow our followers — it built our customer base.",

    author: "Founder, Fashion Label",
    reverse: false,
  },
];

export default function Page() {
  return (
    <main className="bg-black min-h-screen pt-36 pb-24">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
          <h1
            className={`${montserrat.className} text-white font-semibold leading-[0.9] tracking-[0.02em] text-[clamp(3rem,6vw,6rem)]`}
          >
            CASE
            <br />
            STUDIES
          </h1>

          <div className="text-right uppercase tracking-[0.15em] text-[0.7rem] text-neutral-500 leading-7">
            Selected Work
            <br />
            2026 Edition
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-6">
          {caseStudies.map((item) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 border border-white/10 overflow-hidden hover:border-white/25 transition-all duration-500 ${item.reverse ? "lg:[direction:rtl]" : ""
                }`}
            >
              {/* Image Side */}
              <div className="bg-[#111111] p-8 md:p-10 flex items-center justify-center lg:[direction:ltr]">
                <div className="relative w-full max-w-[650px] aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content Side */}
              <div className="bg-[#0D0D0D] p-10 md:p-14 flex flex-col justify-between lg:[direction:ltr]">
                <div>
                  <div className="flex items-center gap-3 uppercase tracking-[0.2em] text-[0.65rem] text-neutral-500 mb-5">
                    <div className="w-5 h-px bg-white" />
                    {item.category}
                  </div>

                  <h2 className="text-white text-[clamp(1.8rem,2.5vw,2.3rem)] leading-tight mb-5">
                    {item.title}
                  </h2>

                  <p className="text-neutral-400 text-sm leading-7 mb-8">
                    {item.problem}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {item.services.map((service) => (
                      <span
                        key={service}
                        className="px-4 py-2 border border-white/10 text-[0.65rem] uppercase tracking-[0.1em] text-neutral-400"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="text-white text-6xl md:text-7xl font-semibold leading-none mb-3">
                    {item.result}
                  </div>

                  <p className="text-sm tracking-[0.05em] text-neutral-500 mb-6">
                    {item.resultDesc}
                  </p>

                  {item.stats && (
                    <div className="grid grid-cols-3 gap-px bg-white/10 mb-8">
                      {item.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="bg-[#111111] p-4 text-center"
                        >
                          <div className="text-2xl md:text-3xl font-semibold text-white">
                            {stat.value}
                          </div>

                          <div className="mt-2 text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <blockquote className="pl-5 border-l-2 border-white/40 italic text-neutral-300 leading-7">
                    "{item.quote}"

                    <cite className="block mt-3 not-italic uppercase tracking-[0.1em] text-[0.72rem] text-neutral-500">
                      {item.author}
                    </cite>
                  </blockquote>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}