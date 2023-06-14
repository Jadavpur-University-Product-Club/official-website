import { toast } from "react-hot-toast";


export default function Contact() {
  async function submitFormHelper(e) {
    const form = new FormData(e.target);
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxLmjkP641pU97aMMpLUyMydQWbE5mIt0fO2BFI_ITZbZRFZke5l9vDi4ETM3R4QxjK/exec",
      {
        method: "POST",
        body: form,
      }
    );
    const json = await res.json();
    console.log(json);
  }

  async function submitForm(e) {
    e.preventDefault();
    toast.promise(submitFormHelper(e), {
      loading: "Form Submitting...",
      success: <b>We will reach out to you soon !</b>,
      error: <b>Retry Please.</b>,
    });
  }
  return (
    <section className="bg-website-background" id="contact_us">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-white">
          Contact Us
        </h2>
        <p className="mb-8 text-center font-light text-gray-400 sm:text-xl lg:mb-16">
          Need details about our club ? Let us know.
        </p>
        <form action="#" className="space-y-8" onSubmit={submitForm}>
          <div>
            <label
              for="email"
              className="mb-2 block text-sm font-medium text-gray-50"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="contact@productclub.com"
              name="email"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="font-medium text-gray-50 mb-2 block text-sm"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="mb-2 block text-sm font-medium text-gray-50"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-amber-400 sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
