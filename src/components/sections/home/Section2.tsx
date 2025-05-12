import Image from 'next/image';
import Link from 'next/link';

export default function Section2() {
  return (
    <section className="w-full mx-auto px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-medium text-black leading-tight mb-6">
            Over 160 ways to do things your way
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect your tools and close your tabs with 160+ integrations for everything from project management and task tracking to communication and data visualization. Or develop your own apps on our award-winning platform.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Integrations Card */}
          <div className="group relative overflow-hidden">
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src="/test.png"
                alt="Integrations"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Content Area (white background) */}
            <div className="pt-8 rounded-b-2xl">
              <h3 className="text-2xl font-semibold text-black mb-4">Integrations</h3>
              <p className="text-lg text-gray-600 mb-6">
                Connect your favorite tools with integrations for everything from project management and task tracking to collaboration and design.
              </p>
              <Link 
                href="/integrations" 
                className="inline-block px-6 py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Developer Portal Card */}
          <div className="group relative overflow-hidden">
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <Image
                src="/test.png"
                alt="Developer Portal"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Content Area (white background) */}
            <div className="pt-8 rounded-b-2xl">
              <h3 className="text-2xl font-semibold text-black mb-4">Developer portal</h3>
              <p className="text-lg text-gray-600 mb-6">
                Discover tools, APIs, libraries, and documentation to develop Miro apps that businesses will love to use.<br/><br/>
              </p>
              <Link 
                href="/developer-portal" 
                className="inline-block px-6 py-3 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}