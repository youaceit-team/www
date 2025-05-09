"use client";

import AnimatedList from "./animations/AnimatedList";

export default function FAQ() {
  const FAQ_LIST = [
    {
      question: "What is YouAceIt?",
      answer:
        "YouAceIt is the world’s first exam performance optimizer. A smart scheduling platform designed to help students align their studies, health, and deadlines to maximize academic outcomes.",
    },
    {
      question: "Who should use YouAceIt?",
      answer:
        "Any student preparing for critical exams. Whether it's A-levels, IB, university finals, or professional certifications, YouAceIt helps you study smarter, not harder.",
    },
    {
      question: "How is YouAceIt different from other calendar apps?",
      answer:
        "Unlike traditional tools like Google Calendar or Notion, YouAceIt intelligently plans your study time. It analyzes your availability, task urgency, and personal focus patterns to recommend exactly what to study and when.",
    },
    {
      question: "What features does YouAceIt offer?",
      answer:
        "YouAceIt includes Smart Task Prioritization, Dynamic Study Block Suggestions, Google Calendar Integration, Deadline-Aware Scheduling, and more features coming soon...",
    },
    {
      question: "Do I need to input everything manually?",
      answer:
        "Not at all! Once you connect your calendar and enter your exams and tasks, YouAceIt takes over, offering optimized plans with minimal manual input.",
    },
    {
      question: "Is YouAceIt powered by AI?",
      answer:
        "Yes! Our AI models evaluate task priority, suggest high-focus time slots, adapt to your rhythm, and help you maintain balance. This prevents burnout while boosting results!",
    },
    {
      question: "What if my schedule changes?",
      answer:
        "No problem. Your calendar syncs in real time, and YouAceIt automatically reoptimizes your study blocks around any changes.",
    },
    {
      question: "Is YouAceIt free to use?",
      answer:
        "YouAceIt will launch with a free plan that includes all essential features. A premium version with advanced insights and personalization will be available soon.",
    },
    {
      question: "Which platforms is YouAceIt available on?",
      answer:
        "YouAceIt is current available on both iOS and Android devices! Though, stay tuned for a web version 👀!",
    },
    {
      question: "How do I start using YouAceIt?",
      answer:
        "Simply download the app and sign up. We'll guide you through the rest.",
    },
  ];

  return (
    <div className="w-full text-black px-8 md:px-20 py-12 text-sm md:text-base">
      <div className="text-center mb-8">
        <h2 className="text-6xl md:text-7xl text-gray-800">
          Frequently Asked Questions
        </h2>
      </div>
      <section className="w-full max-w-screen mx-auto flex flex-col items-center justify-center gap-8">
        <AnimatedList
          items={FAQ_LIST}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
      </section>
    </div>
  );
}