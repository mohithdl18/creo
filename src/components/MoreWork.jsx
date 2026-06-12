export default function MoreWork() {
  return (
    <section className="w-full bg-black pb-24">
      <div className="px-[80px]">
        <div className="flex items-center justify-end gap-6">

          <div className="text-left leading-tight">
            <p className="text-gray-500 text-5xl font-light lowercase pb-2">
              eager for more?
            </p>
            <h2 className="text-[#e2e3e5] text-xl font-extrabold uppercase tracking-[-0.03em]">
              SEE SOME OTHER WORK WE HAVE DONE
            </h2>
          </div>

          <button className="w-18 h-18 bg-gray-500 hover:bg-[#ff3c00] transition-colors duration-300 flex items-center justify-center group">
            <span
              className="material-symbols-outlined text-white group-hover:text-black transition-colors duration-300"
              style={{ fontSize: "38px" }}
            >
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}