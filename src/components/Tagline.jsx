import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Tagline() {
  return (
    <section className="w-full min-h-screen bg-black flex items-center pt-20 px-[30px] md:px-[124px]">
      {/* <div
        className={`
          ${montserrat.className}
          w-full text-[#e2e3e5]
          text-5xl sm:text-6xl md:text-7xl lg:text-[100px]
          font-medium leading-[1.15] tracking-[-0.04em]
        `}
      >
        <p className="text-right">We are divine creators</p>
        <p className="text-left">forging ad-campaigns that</p>
        <p className="text-left">
          ignite viewer{" "}
          <span className="text-[#ff3c00]">madness</span> and
        </p>
        <p className="text-left">
          eternal brand{" "}
          <span className="bg-[#ff3c00] text-black px-2">obsession</span>.
        </p>
      </div> */}
      <div
        className={`
          ${montserrat.className}
          w-full text-[#e2e3e5]
          text-5xl sm:text-6xl md:text-7xl lg:text-[72px]
          font-medium leading-[1.15] tracking-[-0.04em]
        `}
      >
        <p className="text-right text-[80px]">We don't make content.</p>
        <p className="text-left text-[51px]">We build brands that people actually want to buy from.</p>
        <p className="text-left">
          {" "}
          <span className="text-[#FCB724] text-[65px] font-bold">Strategy, production, and performance - </span> 
        </p>
        <p className="text-left text-[126px] font-semibold">
           one studio,{" "} <br />zero
          <span className="bg-[#FCB724] text-black px-2">compromises</span>.
        </p>
      </div>
    </section>
  );
}