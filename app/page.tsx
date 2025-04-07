import React from "react";
import Header from "./components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6 font-poppins">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-4 mt-48 text-black">
          Welcome to Aethos
        </h1>
        <p className="text-lg text-gray-700 mb-8">Coming soon...</p>
      </div>
      <div className="flex items-center justify-center w-full max-w-4xl mx-auto mt-10">
        <p className="text-lg text-gray-700 mb-8">Stay tuned for updates!</p>
      </div>
    </main>
  );
}
