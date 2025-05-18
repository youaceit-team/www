import FAQ from "../components/sections/home/Faq";
import MailingList from "../components/sections/home/MailingList";
import Section from "../components/sections/home/Section";
import Section2 from "../components/sections/home/Section2";
import Section3 from "../components/sections/home/Section3";

export default function Home() {
  return (
    <main className="h-fit flex flex-col items-center justify-start font-poppins">
      <section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-30">
        <div className="relative w-full flex justify-center items-center mt-16 px-4">
          <img
            src="/assets/sticky_left.svg"
            alt="Sticky Note Left"
            className="absolute left-0 -translate-y-1/2 -rotate-[15deg] w-132 sm:w-136 md:w-140 -ml-144 md:-ml-100"
            style={{ top: "30%" }}
          />
          <img
            src="/assets/sticky_left.svg"
            alt="Sticky Note Left"
            className="absolute left-0 -translate-y-1/2 -rotate-[-10deg] w-172 sm:w-176 md:w-180 -ml-144 md:-ml-148"
            style={{ top: "92%" }}
          />
          <img
            src="/assets/sticky_right.svg"
            alt="Sticky Note Right"
            className="absolute right-0 -translate-y-1/2 rotate-[-5deg] w-192 sm:w-196 md:w-200 -mr-144 md:-mr-150"
            style={{ top: "65%" }}
          />
          <h2 className="text-7xl md:text-8xl text-center text-gray-800 font-medium leading-snug max-w-full w-full">
            Smarter Schedule. <br />
            Better Results. <br />
            Backed by <span className="text-[#fe4a22] text">Science</span>.
          </h2>
        </div>
      </section>

      <section className="w-full flex justify-center items-center mt-48">
        <img
          src="/models/ipad_iphone.svg"
          alt="Showcase"
          className="w-full max-w-7xl object-contain"
        />
      </section>

      <section className="w-full mt-32 px-8 md:px-20">
        <Section3 />
      </section>

      <section className="w-full mt-32 px-8 md:px-20">
        <Section />
      </section>

      <section className="w-full mt-32 px-8 md:px-20">
        <Section2 />
      </section>

      <section className="w-full mt-32 px-8 md:px-20">
        <FAQ />
      </section>

      <section className="w-full mt-32 px-8 md:px-20">
        <MailingList />
      </section>
    </main>
  );
}
