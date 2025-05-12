'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const sections = [
  {
    title: 'Product',
    content: null,
  },
  {
    title: 'UX Design & Research',
    content:
      'Transform scattered insights into stunning experiences—all in one creative playground. Sketch wireframes, build interactive prototypes, and run design workshops with your key partners, no matter where they sit.',
  },
  {
    title: 'Engineering',
    content: null,
  },
  {
    title: 'Program and Project Management',
    content: null,
  },
];

export default function Section() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section className="w-full max-w-screen-2xl mx-auto px-8 py-24 flex flex-col md:flex-row gap-24 items-start">
      {/* Left Column */}
      <div className="flex-1">
        <h2 className="text-5xl font-medium text-black leading-tight mb-16">
            Exam stress ends with a plan that works
        </h2>

        <div className="space-y-8">
          {sections.map((section, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div key={idx} className="border-b-2 border-gray-300 pb-6">
                <button
                  onClick={() => setActiveIndex(idx === activeIndex ? null : idx)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span
                    className={`text-3xl font-medium transition-colors ${
                      isActive ? 'text-black font-bold' : 'text-gray-800'
                    }`}
                  >
                    {section.title}
                  </span>
                  <span className="text-4xl">{isActive ? '˄' : '˅'}</span>
                </button>

                <AnimatePresence>
                  {isActive && section.content && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xl text-gray-600 mt-6 mb-6">{section.content}</p>
                      <button className="px-6 py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-900 transition">
                        Learn more
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="flex-1 flex justify-center">
        <div className="p-4 rounded-3xl shadow-xl w-full max-w-lg">
          <Image
            src="/test.png" // Replace with your image
            alt="Team collaboration"
            width={800}
            height={600}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
