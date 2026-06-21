import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Tagline() {
  return (
    <section className="w-full min-h-screen bg-black flex items-center pt-20 px-6 md:px-[80px] lg:px-[124px]">
      <div
        className={`
          ${montserrat.className}
          w-full text-[#e2e3e5]
          font-medium leading-[1.15] tracking-[-0.04em]
        `}
      >
        <p className="text-right text-[7vw] sm:text-[48px] md:text-[60px] lg:text-[80px]">
          We don't make content.
        </p>
        <p className="text-left text-[4.5vw] sm:text-[32px] md:text-[40px] lg:text-[46px]">
          We build brands that people actually want to buy from.
        </p>
        <p className="text-left">
          <span className="text-[#FCB724] text-[5vw] sm:text-[36px] md:text-[50px] lg:text-[58px] font-bold">
            Strategy, production, and performance —
          </span>
        </p>
        <p className="text-left text-[9vw] sm:text-[60px] md:text-[90px] lg:text-[126px] font-semibold leading-[1]">
          one studio,{" "}<br />zero
          <span className="bg-[#FCB724] text-black px-2">compromises</span>.
        </p>
      </div>
    </section>
  );
}