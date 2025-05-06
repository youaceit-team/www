"use client";

import AnimatedList from "./animations/AnimatedList";

export default function FAQ() {
  const FAQ_LIST = [
    {
      question: "Can my team be composed of members from different schools?",
      answer: "Absolutely, as long as each teammate meets the eligibility criteria!",
    },
    {
      question: "Can I change the name and details of my team after registration?",
      answer: "The information submitted during registration is final.",
    },
    {
      question: "Should I participate even if I have not studied H2 or Olympiad level economics?",
      answer:
        "Yes! All Pre-U students, regardless of their subjects, can participate in the school category. SEL has questions of a wide range of difficulties, so you can challenge yourself regardless of your economics proficiency.",
    },
    {
      question: "Should I participate in the School Category or Open Category?",
      answer:
        "SEL collaborates with JCs and schools by sharing the performance of their students who have registered under the School Category. Thus, only participants of the school category will have their prizes and awards recorded in their CCA certificates and transcripts.",
    },
    {
      question: "May I participate even if I am not studying in Singapore?",
      answer:
        "Yes, you may. The same restrictions on the School and Open Category will apply: only students who are all studying in Pre-University education may participate in the school category.",
    },
    {
      question: "May I use the internet during this competition?",
      answer:
        "Yes! Most online resources such as textbooks, research papers, graphing calculators, and computing software can all be used to aid in solving questions. The one exception is that any usage of AI tools such as Chatbots is strictly prohibited.",
    },
    {
      question: "How do we obtain new problems to solve during the contest?",
      answer:
        "After completing or skipping an existing question, your team can choose new questions from a pool of subsequent questions. You can attempt a maximum of 4 main problems at any one time.",
    },
    {
      question: "How hard are SEL questions?",
      answer:
        "SEL questions range in difficulty from those similar to the ones you have encountered in school, to questions set at the undergraduate and olympiad level.",
    },
    {
      question: "What happens if I submit a wrong answer?",
      answer:
        "You can reattempt a question-part as many times as you need, but the points awarded for a correct answer will decrease after incorrect attempts. Certain questions such as MCQs have a limit of 3 attempts.",
    },
    {
      question: "May I skip questions?",
      answer:
        "Yes, but 2 points will be deducted from your team's overall score per skip. Your team will receive a free skip that allows you to skip a question without penalty every 30 minutes.",
    },
    {
      question: "How do I obtain bonus points?",
      answer:
        "From 10 am, the Economania section will be unlocked, featuring 5 categories of 3 questions each in ascending difficulty. If your team completes some or all categories of Economania before 11 am, the points which your team obtained from those categories will be doubled.",
    },
  ];

  return (
    <div className="w-full text-black px-8 md:px-20 py-12 text-sm md:text-base">
              <div className="text-center mb-8">
          <h2 className="text-6xl md:text-7xl text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>
      {/* FAQ List Section */}
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
