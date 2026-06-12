"use client";

const clients = [
    "Blanc",
    "Madhu Silk Sarees",
    "Lysh",
    "Cypher Hood",
    "Le Kene",
    "Coorg Cliffs",
    "Trisara",
    "Rapido",
    "Falcon Group",
    "Devadhare",
    "Urban Company",
    "Myntra",
    "Blinkit",
    "Lenskart",
    "Sugar Cosmetics",
];

export default function Clients() {
    return (
        <section className="w-full bg-black py-24 overflow-hidden">
            <div className="px-[80px]">
                <div className="flex items-start gap-10">
                    <div className="shrink-0 pt-4">
                        <span className="text-[#e2e3e5] uppercase text-sm tracking-wide">
                            (Clients)
                        </span>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-[#e2e3e5] text-[100px] leading-[0.92] tracking-[-0.06em] font-semibold">
                            The names that said
                            <br />
                            <span className="relative top-5 left-3/5 bg-[#FCB724] text-black px-2">
                                "Let's do it"
                            </span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* FULL WIDTH MARQUEE */}
            <div className="relative left-1/2 -translate-x-1/2 w-screen mt-20 overflow-hidden">
                <div className="flex marquee-track">
                    {[...clients, ...clients].map((client, index) => {
                        const isLight = index % 2 !== 0;

                        return (
                            <div
                                key={index}
                                className={`flex-shrink-0 px-12 py-6 mx-3 border transition-all duration-300 ${
                                    isLight
                                        ? "bg-[#e2e3e5] border-[#e2e3e5]"
                                        : "bg-white/[0.04] border-white/[0.08]"
                                }`}
                            >
                                <span
                                    className={`text-[32px] font-medium tracking-[-0.03em] whitespace-nowrap ${
                                        isLight
                                            ? "text-black"
                                            : "text-[#e2e3e5]"
                                    }`}
                                >
                                    {client}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}