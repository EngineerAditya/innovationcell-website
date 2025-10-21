const AboutMIC = () => {
  return (
    <section id="about" className="relative bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
              About MIC
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
              Empowering innovators, fostering creativity, and building the future of entrepreneurship
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="space-y-12">
            {/* Mission Statement */}
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-black">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                The MAHE Innovation Centre is dedicated to nurturing a vibrant ecosystem where 
                ideas transform into impactful ventures. We provide the resources, mentorship, 
                and community support needed to turn visionary concepts into successful businesses 
                that create jobs and drive economic growth.
              </p>
            </div>

            {/* Two Column Features */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-block rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">
                  Vision
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black">
                  Building Tomorrow's Leaders
                </h3>
                <p className="leading-relaxed text-gray-600">
                  We envision a future where every student has the opportunity to become a 
                  job creator rather than a job seeker. Through hands-on experience, cutting-edge 
                  resources, and a supportive community, we're shaping the next generation of 
                  entrepreneurs and innovators.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-block rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white">
                  Impact
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black">
                  Creating Real-World Change
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Since our inception, MIC has supported over 150+ startups, facilitated 
                  connections with 200+ industry mentors, and helped raise ₹50+ crores in 
                  funding. Our alumni have created hundreds of jobs and continue to make a 
                  meaningful impact in their respective industries.
                </p>
              </div>
            </div>

            {/* What We Offer */}
            <div className="rounded-2xl bg-black p-8 text-white shadow-lg sm:p-12">
              <h3 className="mb-8 text-3xl font-bold">What We Offer</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <div className="mb-2 text-2xl">🚀</div>
                  <h4 className="mb-2 text-lg font-semibold">Incubation Programs</h4>
                  <p className="text-sm text-gray-300">
                    Structured support for early-stage startups with workspace, mentorship, and funding opportunities.
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl">💡</div>
                  <h4 className="mb-2 text-lg font-semibold">Innovation Labs</h4>
                  <p className="text-sm text-gray-300">
                    State-of-the-art facilities equipped with the latest technology for prototyping and development.
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl">👥</div>
                  <h4 className="mb-2 text-lg font-semibold">Mentorship Network</h4>
                  <p className="text-sm text-gray-300">
                    Access to experienced entrepreneurs, industry experts, and successful alumni.
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl">📚</div>
                  <h4 className="mb-2 text-lg font-semibold">Workshops & Training</h4>
                  <p className="text-sm text-gray-300">
                    Regular sessions on business development, technical skills, and market strategies.
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl">🤝</div>
                  <h4 className="mb-2 text-lg font-semibold">Industry Connections</h4>
                  <p className="text-sm text-gray-300">
                    Networking opportunities with investors, partners, and potential customers.
                  </p>
                </div>
                <div>
                  <div className="mb-2 text-2xl">💰</div>
                  <h4 className="mb-2 text-lg font-semibold">Funding Support</h4>
                  <p className="text-sm text-gray-300">
                    Assistance with pitch preparation, investor introductions, and grant applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-black">150+</div>
                <p className="text-sm uppercase tracking-wide text-gray-600">
                  Startups Incubated
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-black">200+</div>
                <p className="text-sm uppercase tracking-wide text-gray-600">
                  Industry Mentors
                </p>
              </div>
              <div className="text-center">
                <div className="mb-2 text-5xl font-bold text-black">₹50Cr+</div>
                <p className="text-sm uppercase tracking-wide text-gray-600">
                  Funding Raised
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="rounded-2xl border-2 border-black bg-gray-50 p-8 text-center">
              <h3 className="mb-3 text-2xl font-bold text-black">
                Ready to Transform Your Ideas?
              </h3>
              <p className="mb-6 text-gray-600">
                Join a community of innovators, creators, and entrepreneurs who are shaping the future.
              </p>
              <button className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition-transform hover:scale-105">
                Learn More About Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMIC;
