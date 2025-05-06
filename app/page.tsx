import FAQ from "./components/Faq";
import StarBorder from "./components/animations/StarBorder";
import SpotlightCard from "./components/SpotlightCard";
import ShinyText from "./components/animations/ShinyText";
import MailingList from "./components/MailingList";

export default function Home() {
  return (
    <main className="h-fit flex flex-col items-center justify-start font-poppins">
      {/* Introduction section */}
      <section className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto mt-10">
        {/* Slogan */}
        {/* <StarBorder
          as="div"
          className="mt-32 text-2xl font-semibold text-center py-4"
          color="white"
          speed="5s"
        >
          Not Just a Calendar.
        </StarBorder> */}
        <button className="mt-32 text-center py-4 bg-black rounded-xl px-6 cursor-pointer">
          <ShinyText
            text="Not Just a Calendar."
            disabled={false}
            speed={2}
            className="text-2xl font-semibold text-white/60"
          />
        </button>

        {/* Tagline with sticky notes */}
        <div className="relative w-full flex justify-center items-center mt-16 px-4">
          {/* Left Sticky Note */}
          <img
            src="/assets/sticky_left.svg"
            alt="Sticky Note Left"
            className="absolute left-0 -translate-y-1/2 -rotate-[-10deg] w-172 sm:w-176 md:w-180 -ml-144 md:-ml-148"
            style={{ top: '65%' }}
          />

          {/* Right Sticky Note */}
          <img
            src="/assets/sticky_right.svg"
            alt="Sticky Note Right"
            className="absolute right-0 -translate-y-1/2 rotate-[-15deg] w-172 sm:w-176 md:w-180 -mr-144 md:-mr-148"
            style={{ top: '40%' }}
          />

          {/* Main Header */}
          <h2 className="text-7xl md:text-8xl text-center text-gray-800 font-medium leading-snug max-w-full w-full">
            Smarter Schedule. <br />Better Results. <br />Backed by {" "}
            <span className="text-[#fe4a22] text">Science</span>.
          </h2>
        </div>

      </section>

      <section className="w-full flex justify-center items-center mt-24">
        <img
          src="/models/ipad_iphone.svg"
          alt="Showcase"
          className="w-full max-w-7xl object-contain"
        />
      </section>

      {/* More Information section */}
      <section className="w-full bg-[#f9f9f9] rounded-[8rem] px-6 md:px-16 lg:px-32 py-20 mt-40">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-12 mb-24">
          <h2 className="text-5xl md:text-6xl font-medium text-left md:w-1/2">
            Exam stress ends with a plan that works.
          </h2>
          <p className="text-2xl text-right text-gray-600 md:w-3/8 mt-8 md:mt-0">
            Ready for exciting, instantaneous, all-accessible insights in real
            time?
          </p>
        </div>

        {/* Spotlight Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-60">
          {/* Left SpotlightCard */}
          <SpotlightCard
            className="custom-spotlight-card flex-1 pb-140 pr-80 rounded-3xl shadow-md"
            spotlightColor="rgba(255, 255, 255, 0.2)"
          />

          {/* Right SpotlightCard */}
          <SpotlightCard
            className="custom-spotlight-card flex-1 pounded-3xl shadow-md"
            spotlightColor="rgba(255, 255, 255, 0.2)"
          />
        </div>
      </section>

      {/* FAQ section */}
      <section className="w-full mt-32 px-8 md:px-20">
        <FAQ />
      </section>

      {/* Mailing list section */}
      <section className="w-full mt-32 px-8 md:px-20">
        <MailingList />
      </section>
    </main>
  );
}
