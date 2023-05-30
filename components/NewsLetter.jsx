export default function NewsLetter() {
  return (
    <>
      <div class="flex w-full flex-col items-center justify-center bg-newsletter-backfround py-8 space-y-10">
        <p class="text-center font-montserrat text-4xl">
          Subscribe To Newsletter
        </p>
        <div className="flex rounded-full border-2 border-white p-1.5 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
          <input
            className="border-0 bg-transparent px-4 py-2 text-base placeholder:text-slate-200"
            placeholder="Enter your email"
          ></input>
          <button className="rounded-full bg-white px-6 py-2 text-newsletter-backfround font-semibold font-open-sans">
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </div>
    </>
  );
}
