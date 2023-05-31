import { toast } from "react-hot-toast";

export default function NewsLetter() {


  async function submitFormHelper(e) {
    const form = new FormData(e.target);
    form.append("name", "");
    const res = await fetch("https://script.google.com/macros/s/AKfycbzpADqCc20VHjnD8YwN-_ar5cS0E2T8kIVfyqB4nacPHAkQCYhPMXY_VZFuSg2nIxeb/exec", {
      method: "POST",
      body: form,
    });
    const json = await res.json();
    console.log(json);
  }

  async function submitForm(e) {
    e.preventDefault();
    toast.promise(submitFormHelper(e),
       {
         loading: 'Subscribing...',
         success: <b>Subscribed Successfully !</b>,
         error: <b>Retry Please.</b>,
       }
     );
  }

  return (
    <>
      <form className="flex flex-col items-center justify-center bg-newsletter-backfround py-8 space-y-10" onSubmit={submitForm} id="newsletter">
        <p className="text-center font-montserrat text-2xl md:text-4xl">
          Subscribe To Newsletter
        </p>
        <div className="flex rounded-full border-2 border-white p-1.5 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
          <input
            className="border-0 bg-transparent p-2 md:p-3 text-sm md:text-base placeholder:text-slate-200 w-fit"
            placeholder="Enter your email"
            type="email"
            name="emailid"
            required
          ></input>
          <button className="rounded-full bg-white px-2 py-1 md:px-6 md:py-2 text-sm md:text-base text-newsletter-backfround font-semibold font-open-sans" type="submit">
            {" "}
            Subscribe{" "}
          </button>
        </div>
      </form>
    </>
  );
}
