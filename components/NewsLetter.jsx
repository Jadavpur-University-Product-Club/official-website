export default function NewsLetter() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-newsletter-backfround py-8 space-y-10">
        <p className="text-center font-montserrat text-2xl md:text-4xl">
          Subscribe To Newsletter
        </p>
        <div className="flex rounded-full border-2 border-white p-1.5 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
          <input
            className="border-0 bg-transparent p-2 md:p-3 text-sm md:text-base placeholder:text-slate-200 w-fit"
            placeholder="Enter your email"
          ></input>
          <button className="rounded-full bg-white px-2 py-1 md:px-6 md:py-2 text-sm md:text-base text-newsletter-backfround font-semibold font-open-sans">
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </div>
    </>
  );
}
