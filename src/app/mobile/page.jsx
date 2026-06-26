"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaGoogle, FaLinkedin } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { Montserrat, Monoton } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const monoton = Monoton({
    subsets: ["latin"],
    weight: ["400"],
});


// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuLinks = [
        { label: "[WORK]", href: "/work" },
        { label: "[SERVICES]", href: "#services" },
        { label: "[ABOUT]", href: "#about" },
        { label: "[WHY US]", href: "#why-us" },
        { label: "[CONTACT]", href: "https://wa.link/d6cus6" },
    ];

    return (
        <>
            <nav className="fixed top-4 left-0 w-full z-[150] pointer-events-none">
                <div className="flex justify-center px-4">
                    <div className="pointer-events-auto w-full bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 flex items-center justify-between">
                        <a
                            href="https://wa.link/d6cus6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold tracking-[0.1em] text-xs text-[#d9d9d9]"
                        >
                            SAY HI!
                        </a>

                        <Image
                            src="/logo.png"
                            alt="Creo Creators"
                            width={160}
                            height={50}
                            className="h-7 w-auto object-contain"
                            priority
                        />

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative z-[160] w-6 h-6 grid grid-cols-2 grid-rows-2 gap-1"
                            aria-label="Toggle menu"
                        >
                            {["rounded-br-md", "rounded-bl-md", "rounded-tr-md", "rounded-tl-md"].map((corner, i) => (
                                <span
                                    key={i}
                                    className={`transition-all duration-300 ${isMenuOpen ? "bg-black rounded-full " + (i % 2 === 0 ? "rotate-45" : "-rotate-45")
                                        : "bg-[#d9d9d9] " + corner
                                        }`}
                                />
                            ))}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-[120] flex items-center justify-center overflow-hidden">
                    <span className="absolute select-none pointer-events-none text-[40vw] font-black text-black/[0.04] leading-none tracking-[-0.05em]">
                        CREO
                    </span>
                    <div className="flex flex-col items-center justify-center gap-5 px-4">
                        {menuLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.label === "[CONTACT]" ? "_blank" : undefined}
                                rel={item.label === "[CONTACT]" ? "noopener noreferrer" : undefined}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-black text-[12vw] font-bold tracking-[-0.05em] leading-none"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
    const languages = [
        "creo",
        "क्रियो",
        "ಕ್ರಿಯೋ",
        "க்ரியோ",
        "ക്രിയോ",
        "క్రియో",
        "ક્રિયો",
        "ਕ੍ਰਿਓ",
        "ক্রিও",
        "ক্ৰিঅ",
    ];

    const [currentWord, setCurrentWord] = useState(0);
    const [visible, setVisible] = useState(true);
    const [audioOn, setAudioOn] = useState(false);

    const videoRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % languages.length);
                setVisible(true);
            }, 120);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const toggleAudio = () => {
        if (!videoRef.current) return;

        const nextState = !audioOn;

        setAudioOn(nextState);

        videoRef.current.muted = !nextState;
        videoRef.current.volume = 1;

        if (nextState) {
            videoRef.current.play();
        }
    };

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />

            {/* Audio Button */}
            <button
                onClick={toggleAudio}
                aria-label={audioOn ? "Mute audio" : "Play audio"}
                className="absolute bottom-2 right-2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-xl transition-all duration-300 active:scale-95"
            >
                {audioOn ? (
                    <HiSpeakerWave
                        size={24}
                        className="text-[#E2E3E5]"
                    />
                ) : (
                    <HiSpeakerXMark
                        size={24}
                        className="text-[#E2E3E5]"
                    />
                )}
            </button>

            {/* Multi-language CREO */}
            <div className="absolute bottom-10 left-5 z-20 leading-none">
                <h1
                    className={`text-[#E2E3E5] font-bold leading-none transition-opacity duration-75 text-[18vw] ${visible ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {languages[currentWord]}
                </h1>
            </div>
        </section>
    );
}

// ─── TAGLINE ──────────────────────────────────────────────────────────────────
function Tagline() {
    return (
        <section className="w-full bg-black flex items-center py-16 px-6">
            <div className="w-full text-[#e2e3e5] font-medium leading-[1.15] tracking-[-0.04em]">
                <p className="text-right text-[7vw]">We don't make content.</p>
                <p className="text-left font-extralight text-[4vw] mt-3">
                    We build brands that people actually want to buy from.
                </p>
                <p className="text-left mt-3">
                    <span className="text-[#FCB724] text-[5vw] font-bold">
                        Strategy, production, and performance
                    </span>
                </p>
                <p className="text-left text-[9vw] font-semibold leading-[1.2] mt-1">
                    one studio,{" "}zero
                    <span className="bg-[#FCB724] text-black px-2">compromises</span>.
                </p>
            </div>
        </section>
    );
}

// ─── WORK SHOWCASE ────────────────────────────────────────────────────────────
const cards = [
    { title: "Blanc", subtitle: "Creative Direction & Branding", video: "/vid1.mp4" },
    { title: "Air Jordans", subtitle: "Motion & Visual Identity", video: "/vid2.mp4" },
    { title: "Madhu Silks", subtitle: "Digital Experience Design", video: "/vid3.mp4" },
];

function WorkShowcase() {
    return (
        <section id="work" className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start mb-10">
                <span className="text-[#e2e3e5] text-xs tracking-[-0.03em] mb-4">
                    (OUR WORK)
                </span>

                <h1 className="text-[#e2e3e5] text-[8vw] leading-[0.92] tracking-[-0.06em] font-medium">
                    Projects that left a mark.
                </h1>
            </div>

            <div className="flex flex-col gap-6">
                {cards.map((item) => (
                    <div key={item.title} className="group">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                            <video
                                src={item.video}
                                autoPlay muted loop playsInline disablePictureInPicture
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-[#e2e3e5] px-4 py-3">
                            <h3 className="text-black text-2xl font-bold tracking-[-0.03em] leading-none">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-1 font-light">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── MORE WORK ────────────────────────────────────────────────────────────────
function MoreWork() {
    return (
        <section className="w-full bg-black pb-16 px-5">
            <div className="flex items-center justify-end gap-4">
                <div className="text-left leading-tight">
                    <p className="text-gray-500 text-2xl font-light lowercase pb-1">eager for more?</p>
                    <h2 className="text-[#e2e3e5] text-xs font-extrabold uppercase tracking-[-0.03em]">
                        SEE SOME OTHER WORK WE HAVE DONE
                    </h2>
                </div>
                <Link
                    href="/work"
                    className="w-12 h-12 bg-gray-500 hover:bg-[#FCB724] transition-colors duration-300 flex items-center justify-center flex-shrink-0"
                >
                    <span className="material-symbols-outlined text-white" style={{ fontSize: "22px" }}>
                        arrow_forward
                    </span>
                </Link>
            </div>
        </section>
    );
}

// ─── MOTTO ────────────────────────────────────────────────────────────────────
function Motto() {
    return (
        <section className="w-full bg-black py-20 px-6 flex items-center justify-center">
            <div className="text-center leading-[0.9] tracking-[-0.06em]">
                <h1 className="text-[#FCB724] uppercase font-normal text-[10vw]" style={{ fontFamily: "'Monoton', cursive" }}>
                    Your &nbsp; Vision
                </h1>
                <h2 className="text-[#7a7a7a] uppercase font-medium my-6 text-[6vw]">is</h2>
                <h1 className="text-[#e2e3e5] uppercase font-normal text-[10vw]" style={{ fontFamily: "'Monoton', cursive" }}>
                    Our &nbsp; Mission
                </h1>
            </div>
        </section>
    );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function AboutMain() {
    const words = ["Creativity", "Strategy", "Consistency"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start">
                <span className="text-[#e2e3e5] uppercase text-xs tracking-wide mb-4">
                    (About)
                </span>

                <h1 className="text-[#e2e3e5] text-[11vw] leading-[0.92] tracking-[-0.06em] font-semibold">
                    Built through{" "}
                    <span
                        className="inline-block px-2 py-1"
                        style={{ color: "#000", backgroundColor: "#FCB724" }}
                    >
                        {words[index]}
                    </span>
                    .
                </h1>
            </div>

            <p className="mt-6 text-[#e2e3e5] text-[4.5vw] font-light leading-[1.3] tracking-[-0.03em]">
                Helping brands tell better stories, create better content, and get better results. A mix of AI, creativity, strategy, production, and marketing expertise.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-10">
                {[
                    { value: "50+", label: "Brands Worked With" },
                    { value: "4.2x", label: "Avg. ROAS Delivered" },
                    { value: "₹2Cr+", label: "Ad Spend Managed" },
                    { value: "180%", label: "Avg. Follower Growth" },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-white/5 border border-white/10 p-4 rounded-lg flex flex-col justify-between h-[120px]"
                    >
                        <p className="text-[#e2e3e5] text-[9vw] font-bold">{stat.value}</p>
                        <p className="text-[#a0a1a3] text-[9px] uppercase tracking-wide leading-tight">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── TEAM ─────────────────────────────────────────────────────────────────────
function Team() {
    return (
        <section id="team" className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start mb-6">
                <span className="text-[#e2e3e5] uppercase text-xs tracking-wide mb-4">
                    (Team)
                </span>

                <h1 className="text-[#e2e3e5] text-[11vw] leading-[0.92] tracking-[-0.06em] font-semibold">
                    A few Humans, mostly
                </h1>
            </div>
            <p className="text-[#9A9A9A] text-[3.8vw] leading-relaxed mb-6">
                Behind every campaign, strategy and creative idea is a team obsessed with making brands impossible to ignore.
            </p>
            <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image src="/noteam.jpeg" alt="Team" fill priority quality={100} sizes="100vw" className="object-cover" />
            </div>
        </section>
    );
}

// ─── FOUNDERS ─────────────────────────────────────────────────────────────────
const teamCards = [
    {
        image: "/f1.jpeg",
        title: "Vishnu Gokul",
        description: "Co-Founder & Head of Operations",
        linkedin: "https://www.linkedin.com/in/vishnugokul/",
        note: "Behind every great idea is a lot of unseen work. That's usually where you'll find me.",
    },
    {
        image: "/f2.jpeg",
        title: "Bhavana Basavaraju",
        description: "Co-Founder & Head of Strategy",
        linkedin: "https://www.linkedin.com/in/bhavana-basavaraju-113742268/",
        note: "Behind every memorable brand is a simple truth. I enjoy helping people find it.",
    },
    {
        image: "/f3.jpeg",
        title: "Suhas M B",
        description: "Co-Founder & Head of Production",
        linkedin: "https://www.linkedin.com/in/suhas-m-b-a29b06212/",
        note: "Every great piece of work starts as a rough idea. I enjoy being part of the journey that shapes it.",
    },
];

function Founders() {
    return (
        <section id="founders" className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start mb-8">
                <span className="text-[#e2e3e5] uppercase text-xs tracking-wide mb-4">
                    (Founders)
                </span>

                <h1 className="text-[#e2e3e5] text-[11vw] leading-[0.92] tracking-[-0.06em] font-semibold">
                    The First Three Dots
                </h1>
            </div>

            <p className="text-[#9A9A9A] text-[3.8vw] leading-relaxed mb-8">
                Before the company had a name, it had three curious minds chasing the same vision.
            </p>

            <div className="flex flex-col gap-8">
                {teamCards.map((card, index) => (
                    <div key={index} className="flex gap-4 items-start">
                        {/* Founder Image */}
                        <div className="relative w-24 h-32 shrink-0 overflow-hidden">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                quality={100}
                                sizes="96px"
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 h-32 flex flex-col justify-between">
                            <div>
                                {/* Name + LinkedIn */}
                                <div className="flex items-center gap-2">
                                    <h3 className="text-[#e2e3e5] text-[4.5vw] font-medium leading-tight">
                                        {card.title}
                                    </h3>

                                    <a
                                        href={card.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-7 h-7 bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="#e2e3e5"
                                            className="w-4 h-4"
                                        >
                                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.7c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.97 2-2.97 4.07V24h-5V8z" />
                                        </svg>
                                    </a>
                                </div>

                                <p className="text-[#FCB724] text-[3.5vw] mt-1 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>

                            <p className="text-[#b8b8b8] text-[3.2vw] italic leading-relaxed">
                                "{card.note}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


// ─── SERVICES ─────────────────────────────────────────────────────────────────
const services = [
    { id: "01", title: "Social Media Marketing", image: "/sm1.png" },
    { id: "02", title: "Google Ads", image: "/sm2.png" },
    { id: "03", title: "Meta Ad Campaigns", image: "/sm3.png" },
    { id: "04", title: "Photo & Video Production", image: "/sm4.png" },
    { id: "05", title: "Branding & Design", image: "/sm5.png" },
    { id: "06", title: "Website Development", image: "/sm6.png" },
    { id: "07", title: "Website Maintenance", image: "/sm7.png" },
];

function ServicesMain() {
    return (
        <section id="services" className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start mb-8">
                <span className="text-[#e2e3e5] uppercase text-xs tracking-wide mb-4">
                    (Services)
                </span>

                <h1 className="text-[#e2e3e5] text-[8vw] leading-[0.92] tracking-[-0.06em] font-medium">
                    THE THINGS WE'RE REALLY GOOD AT
                </h1>
            </div>

            <div className="flex flex-col gap-[1px]">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex items-center justify-between px-5 py-5 bg-white/5 border border-white/10"
                    >
                        <span className="text-[#777] text-sm font-medium">
                            {service.id}
                        </span>

                        <h3 className="text-[#e2e3e5] text-[4.5vw] font-medium tracking-[-0.03em]">
                            {service.title}
                        </h3>

                        <Image
                            src={service.image}
                            alt={service.title}
                            width={28}
                            height={28}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}





// ─── METHOD ───────────────────────────────────────────────────────────────────
const steps = [
    { number: "01", title: "Brains Before Buttons", description: "Before a single pixel is touched, we map positioning, audience architecture, and narrative framework.", tags: "Positioning · Audience · Narrative" },
    { number: "02", title: "Pretty, But Make It Useful", description: "Every concept is engineered to convert — not just to look good. We ask: will this move the audience? Will this move the metric?", tags: "Concepts · Conversion · Craft" },
    { number: "03", title: "Powered by Humans & Machines", description: "AI handles the speed. Humans handle the taste, judgment, and final cut.", tags: "Speed · Scale · Precision" },
    { number: "04", title: "Every Click Counts", description: "Every campaign is tied to a metric from day one — reach, CPL, ROAS, retention. We don't report on vanity.", tags: "Measured · Transparent · Accountable" },
    { number: "05", title: "Crafted, Not Cranked Out", description: "In-house, cinematic, end-to-end. We don't outsource the craft.", tags: "Cinematic · In-House · End-to-End" },
];

function Method() {
    return (
        <section className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start mb-3">
                <span className="text-[#e2e3e5] uppercase text-xs tracking-wide mb-4">
                    (Strategy)
                </span>

                <h2 className="text-[#e2e3e5] text-[10vw] leading-[0.92] tracking-[-0.06em] font-semibold">
                    THE CREO METHOD
                </h2>
            </div>
            <p className="text-[#8a8a8a] text-[5vw] tracking-[-0.03em] mb-10">
                Less chaos. More clarity.
            </p>

            <div className="flex flex-col gap-4">
                {steps.map((step) => (
                    <div
                        key={step.number}
                        className="bg-white/5 border border-white/10 p-6 flex flex-col gap-4"
                    >
                        <p className="text-[#777] text-sm font-medium">{step.number}</p>
                        <h3 className="text-[#e2e3e5] text-[6vw] leading-[1] tracking-[-0.04em] font-semibold">
                            {step.title}
                        </h3>
                        <p className="text-[#b5b5b5] text-[4vw] leading-[1.4]">{step.description}</p>
                        <p className="text-[#7c7c7c] uppercase tracking-[0.12em] text-[10px] border-t border-white/10 pt-4">
                            {step.tags}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── WHY US ───────────────────────────────────────────────────────────────────
const reasons = [
    { title: "Senior Creative on Every Brief", description: "A senior creative leads every project — never juniored, never templated." },
    { title: "Complete Creative Solutions", description: "Strategy, content, production, media, and tech — all in one studio." },
    { title: "Fast & Scalable Execution", description: "Built to ship daily, weekly, monthly — without quality drift." },
    { title: "Performance-Focused Marketing", description: "Every campaign tied to a metric — reach, leads, revenue, retention." },
    { title: "AI + Human Creativity", description: "AI accelerates the work. Humans give it taste, judgment, and craft." },
    { title: "Modern Market Understanding", description: "We read the market in real time — culture, format, platform, taste." },
];

function WhyUs() {
    return (
        <section id="why-us" className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start mb-8">
                <span className="text-[#e2e3e5] uppercase text-xs tracking-wide mb-4">
                    (Why Us)
                </span>

                <h2 className="text-[#e2e3e5] text-[9vw] leading-[1.4] tracking-[-0.06em] font-semibold">
                    Why "one project" rarely stays{" "}
                    <span className="bg-[#FCB724] text-black px-1">
                        one project
                    </span>
                </h2>
            </div>

            <div className="flex flex-col gap-3">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="bg-white/[0.03] border border-white/[0.08] p-6 flex flex-col gap-3"
                    >
                        <span className="text-[#6f6f6f] text-xs tracking-[0.15em] uppercase">0{index + 1}</span>
                        <h3 className="text-[#e2e3e5] text-[5.5vw] leading-[1.1] tracking-[-0.04em] font-semibold">
                            {reason.title}
                        </h3>
                        <p className="text-[#a9a9a9] text-[3.8vw] leading-[1.4]">{reason.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}





// ─── CLIENTS ──────────────────────────────────────────────────────────────────
const clients = [
    "Blanc", "Madhu Silk Sarees", "Lysh", "Cypher Hood", "Le Kene",
    "Coorg Cliffs", "Trisara", "Rapido", "Falcon Group", "Devadhare",
    "Porcupine Castle", "Skyro", "Miraya",
];

function Clients() {
    return (
        <section className="w-full bg-black py-16 px-5">
            <div className="flex flex-col items-start mb-10">
                <span className="text-[#e2e3e5] uppercase text-xs tracking-wide mb-4">
                    (Clients)
                </span>

                <h2 className="text-[#e2e3e5] text-[11vw] leading-[1.2] tracking-[-0.06em] font-semibold">
                    The names that said{" "}
                    <span className="bg-[#FCB724] text-black px-2">
                        "Let's do it"
                    </span>
                </h2>
            </div>

            {/* FULL WIDTH MARQUEE */}
            <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
                <div className="flex marquee-track">
                    {[...clients, ...clients].map((client, index) => {
                        const isLight = index % 2 !== 0;

                        return (
                            <div
                                key={index}
                                className={`flex-shrink-0 px-6 py-4 mx-2 border transition-all duration-300 ${isLight
                                        ? "bg-[#e2e3e5] border-[#e2e3e5]"
                                        : "bg-white/[0.04] border-white/[0.08]"
                                    }`}
                            >
                                <span
                                    className={`text-[5vw] font-medium tracking-[-0.03em] whitespace-nowrap ${isLight
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

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
    return (
        <footer className="w-full bg-[#e7e7e7] text-black px-5 py-10">
            <h2 className="text-[9vw] font-extrabold tracking-[-0.04em] leading-none">
                BENGALURU, <span className="text-[#FCB724]">IND</span>
            </h2>

            <div className="mt-4 text-[5vw] leading-[1.4] font-medium">
                <a href="mailto:admin@creocreators.in" className="block hover:text-[#FCB724] transition-colors">
                    admin@creocreators.in
                </a>
                <a href="tel:+919148386949" className="block hover:text-[#FCB724] transition-colors">
                    +91 91483 86949
                </a>
            </div>

            <div className="flex gap-5 mt-6">
                <a href="https://share.google/xrBIl9ZdVL073EZOz" target="_blank" rel="noopener noreferrer"><FaGoogle size={28} /></a>
                <a href="https://www.instagram.com/creocreators_/" target="_blank" rel="noopener noreferrer"><FaInstagram size={28} /></a>
                <a href="https://www.facebook.com/creoindia/" target="_blank" rel="noopener noreferrer"><FaFacebookF size={28} /></a>
                <a href="https://www.youtube.com/@Creocreators-ev2mv" target="_blank" rel="noopener noreferrer"><FaYoutube size={28} /></a>
                <a href="https://www.linkedin.com/company/creo-creators/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} /></a>
            </div>

            <a
                href="https://wa.link/d6cus6"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-10"
            >
                <h1 className="text-[13vw] font-bold leading-none tracking-[-0.06em] break-words">
                    creo creators
                    <span className="material-symbols-outlined inline-block ml-1" style={{ fontSize: "12vw", fontWeight: 800, verticalAlign: "middle" }}>
                        north_east
                    </span>
                </h1>
            </a>

            <p className="mt-6 text-[4vw] font-medium">All rights reserved @2026</p>
        </footer>
    );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function MobileHome() {
    return (
        <main className="bg-black min-h-screen">
            <Navbar />
            <Hero />
            <Tagline />
            <WorkShowcase />
            <MoreWork />
            <Motto />
            <AboutMain />
            <Team />
            <Founders />
            <ServicesMain />
            <Method />
            <WhyUs />
            <Clients />
            <Footer />
        </main>
    );
}