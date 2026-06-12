"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const teamCards = [
    {
        image: "/f1.jpeg",
        title: "Vishnu Gokul",
        description: "Founder & Creative Director",
        note: "We don't just create campaigns. We create stories people remember and brands people trust.",
        linkedin: "https://www.linkedin.com/in/vishnugokul/",
    },
    {
        image: "/f2.jpeg",
        title: "Bhavana Basavaraju",
        description: "Brand Strategist",
        note: "Every brand has a story. Our job is making sure people care about it.",
        linkedin: "https://www.linkedin.com/in/bhavana-basavaraju-113742268/",
    },
    {
        image: "/f3.jpeg",
        title: "Suhas M B",
        description: "Growth Lead",
        note: "Creativity is important, but measurable impact is what drives growth.",
        linkedin: "https://www.linkedin.com/in/suhas-m-b-a29b06212/",
    },
];

export default function Team() {
    return (
        <section
            id="team"
            className="relative w-full bg-black py-16 overflow-hidden"
        >
            <div className="px-[80px]">
                <div className="flex items-start gap-10">
                    {/* Left Label */}
                    <div className="shrink-0 pt-4">
                        <span className="text-[#e2e3e5] uppercase text-sm tracking-wide">
                            (Team)
                        </span>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Heading */}
                        <h1
                            className={`${montserrat.className} text-[#e2e3e5] text-[100px] leading-[0.92] tracking-[-0.06em] font-semibold`}
                        >
                            A few Humans, mostly
                        </h1>

                        {/* Layout */}
                        <div className="mt-12 grid grid-cols-[1fr_2fr] gap-4">
                            {/* Left Large Image */}
                            <div
                                className="relative aspect-[5/6] overflow-hidden"
                                style={{
                                    transform: "translateZ(0)",
                                }}
                            >
                                <Image
                                    src="/team.jpeg"
                                    alt="Team"
                                    fill
                                    priority
                                    quality={100}
                                    sizes="33vw"
                                    className="object-cover"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "translateZ(0)",
                                    }}
                                />
                            </div>

                            {/* Right Founder Cards */}
                            <div className="aspect-[10/6] flex gap-4">
                                {teamCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 flex flex-col"
                                    >
                                        {/* Flip Card */}
                                        <div className="group relative flex-1 [perspective:1200px]">
                                            <div
                                                className="relative h-full w-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                                            >
                                                {/* Front */}
                                                <div
                                                    className="absolute inset-0 overflow-hidden bg-[#e2e3e5] [backface-visibility:hidden]"
                                                >
                                                    <div className="relative h-full w-full">
                                                        <Image
                                                            src={card.image}
                                                            alt={card.title}
                                                            fill
                                                            priority
                                                            quality={100}
                                                            sizes="33vw"
                                                            className="object-cover"
                                                            style={{
                                                                backfaceVisibility: "hidden",
                                                                transform: "translateZ(0)",
                                                            }}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Back */}
                                                <div
                                                    className="
                            absolute inset-0
                            
                            bg-[#FCB724]
                            p-5
                            flex flex-col justify-between
                            text-black
                            [transform:rotateY(180deg)]
                            [backface-visibility:hidden]
                          "
                                                >
                                                    <div>
                                                        <p className="text-[11px] uppercase tracking-[0.2em] mb-4">
                                                            Founder's Note
                                                        </p>

                                                        <p className="text-sm leading-relaxed">
                                                            {card.note}
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <h4 className="font-semibold text-lg">
                                                                {card.title}
                                                            </h4>

                                                            <p className="text-xs opacity-70">
                                                                Creo Creators
                                                            </p>
                                                        </div>

                                                        <a
                                                            href={card.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="
                                w-10 h-10
                                
                                bg-black
                                text-white
                                flex items-center justify-center
                                transition-transform
                                hover:scale-110
                              "
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                                className="w-5 h-5"
                                                            >
                                                                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.97 2-2.97 4.07V24h-5V8z" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="mt-3">
                                            <h3
                                                className={`${montserrat.className} text-[#e2e3e5] text-[18px] font-medium leading-tight`}
                                            >
                                                {card.title}
                                            </h3>

                                            <p className="text-[#9A9A9A] text-sm mt-1 leading-relaxed">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}