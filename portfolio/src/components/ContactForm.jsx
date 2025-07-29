import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check localStorage for submission timestamp
    const submissionTime = localStorage.getItem("formSubmissionTime");
    if (submissionTime) {
      const elapsedTime = Date.now() - parseInt(submissionTime, 10);
      const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      if (elapsedTime < twentyFourHours) {
        setIsSubmitted(true);
      } else {
        // Clear the old timestamp if 24 hours have passed
        localStorage.removeItem("formSubmissionTime");
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const data = {
      ...formData,
      current_year: new Date().getFullYear(),
    };

    emailjs.send(serviceID, templateID, data, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({
          loading: false,
          success: "Message sent successfully!",
          error: null,
        });
        setFormData({ from_name: "", from_email: "", message: "" });
        setIsSubmitted(true); // Hide form and show thank you message

        // Store submission timestamp in localStorage
        localStorage.setItem("formSubmissionTime", Date.now().toString());
      },
      (err) => {
        console.error("FAILED...", err);
        setStatus({
          loading: false,
          success: null,
          error: "Failed to send message. Please try again later.",
        });
      }
    );
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="from_name"
              className="block text-lg font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-secondary text-light focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="block text-lg font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-secondary text-light focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-secondary text-light focus:outline-none focus:ring-2 focus:ring-primary"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full px-4 py-2 rounded-md bg-primary text-dark font-semibold hover:bg-secondary transition-colors duration-300 flex justify-center items-center ${
                status.loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={status.loading}
            >
              {status.loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
          {status.error && (
            <p className="text-red-500 text-center">{status.error}</p>
          )}
        </form>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
          <p className="text-light">
            Your message has been successfully sent to Priyanshu. We appreciate
            your time and will get back to you shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
