/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  if (!process.env.NEXT_PUBLIC_FORM) {
    return <div>Form ID not found</div>;
  }
  const formCode: string = process.env.NEXT_PUBLIC_FORM;
  // Replace "xjknerrq" with your actual Form ID if it changes
  const [state, handleSubmit] = useForm(formCode);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-green-50 rounded-lg border border-green-200">
        <p className="text-green-700 text-lg font-medium">
          Thanks for your message!
        </p>
        <p className="text-green-600 text-sm mt-1">
          I&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-100"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>

      {/* Email Field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          placeholder="you@example.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Message Field */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
          placeholder="How can I help you?"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
