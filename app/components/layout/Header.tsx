import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-6 py-3 rounded-full">
      <div className="flex items-center gap-4">
        <Image src="/aethos_small.png" alt="Logo" width={32} height={32} />

        <span className="text-white text-lg font-bold"> Aethos</span>
      </div>
      <div className="bg-[#1a1a1a] px-6 py-2 rounded-full flex gap-8">
        <a href="#" className="text-white text-sm hover:text-gray-300">
          Dashboard
        </a>
        <a href="#" className="text-white text-sm hover:text-gray-300">
          Reports
        </a>
        <a href="#" className="text-white text-sm hover:text-gray-300">
          Documents
        </a>
        <a href="#" className="text-white text-sm hover:text-gray-300">
          History
        </a>
        <a href="#" className="text-white text-sm hover:text-gray-300">
          Settings
        </a>
      </div>
      <button className="bg-white text-black font-medium rounded-xl px-5 py-2 hover:bg-gray-200 transition-colors duration-200">
        Sign Up
      </button>
    </nav>
  );
}
