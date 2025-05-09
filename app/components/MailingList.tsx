import React from "react";

export default function MailingList() {
  return (
    <div className="text-center pb-16 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md relative">
      {/* Heading */}
      <h2 className="text-6xl md:text-7xl text-gray-800">
        Join Our Mailing List
      </h2>

      {/* Subheading */}
      <p className="text-2xl text-gray-500 max-w-5xl mx-auto mb-8 mt-8">
        Meet the Innovation Workspace, the AI-powered collaboration platform
        that helps your team build the right thing faster.
      </p>

      {/* Email input and button */}
      <form className="max-w-md mx-auto flex flex-col items-center gap-4 w-full mt-16">
        <input
          type="email"
          placeholder="Enter your work email"
          className="w-[250px] px-4 py-3 border border-gray-300 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-[250px] bg-[#3859ff] text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-blue-700 transition duration-200"
        >
          Sign up free
        </button>
      </form>
    </div>
  );
}
