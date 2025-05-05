export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              Ubuntu 24.04 LTS Noble Numbat is available for download
            </h1>
            <p className="text-xl font-light mb-8">
              Discover the latest and greatest features in our most recent long term supported release.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-ubuntu-orange text-white px-6 py-3 rounded text-center hover:bg-orange-700"
              >
                Download for free
              </a>
              <a href="#" className="text-ubuntu-orange hover:underline flex items-center justify-center">
                Read the deep dive ›
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://assets.ubuntu.com/v1/33b5133c-Noble-Numbat-optimised.svg"
              alt="Ubuntu 24.04 Noble Numbat"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
