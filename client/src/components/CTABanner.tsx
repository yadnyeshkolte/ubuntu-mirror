export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-ubuntu-aubergine to-purple-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1">
            <h2 className="text-xl font-light mb-2">A CTO's guide to real-time Linux</h2>
            <p className="text-sm font-light">Understanding real-time systems, their use cases and inner workings.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="bg-white text-ubuntu-aubergine px-4 py-2 rounded hover:bg-gray-100">
              Download now
            </a>
          </div>
          <div className="hidden md:block ml-8">
            <img
              src="https://assets.ubuntu.com/v1/fb1ea84e-Kernelt%20industries@2x.png"
              alt="Kernel Industries"
              className="h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
