import Link from "next/link";

export default function MoreWork() {
  return (
    <section className="w-full bg-black pb-16 md:pb-24">
      <div className="px-5 md:px-[80px]">
        <div className="flex items-center justify-end gap-4 md:gap-6">
          <div className="text-left leading-tight">
            <p className="text-gray-500 text-3xl md:text-5xl font-light lowercase pb-1 md:pb-2">
              eager for more?
            </p>
            <h2 className="text-[#e2e3e5] text-sm md:text-xl font-extrabold uppercase tracking-[-0.03em]">
              SEE SOME OTHER WORK WE HAVE DONE
            </h2>
          </div>

          <Link
            href="/work"
            className="hide-custom-cursor w-14 h-14 md:w-18 md:h-18 bg-gray-500 hover:bg-[#FCB724] transition-colors duration-300 flex items-center justify-center group flex-shrink-0 cursor-pointer !cursor-pointer"
          >
            <span
              className="material-symbols-outlined text-white group-hover:text-black transition-colors cursor-pointer !cursor-pointer duration-300 "
              style={{ fontSize: "28px" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}