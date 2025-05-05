import { CheckIcon } from "lucide-react";

export default function CloudSection() {
  const featuresLeft = [
    "Optimized kernels for AWS, Azure, Google, Oracle, IBM",
    "FIPS, CIS hardening and CVE fixes with Ubuntu Pro",
    "Minimize rolling reboots with Kernel Livepatch",
    "Network & storage performance optimization",
    "GPU enablement for machines and containers"
  ];

  const featuresRight = [
    "Pay-as-you-go billing, no more licenses",
    "Enterprise support and Expanded Security Maintenance",
    "Cloud workload migration service",
    "Containerization and cloud-native migration service",
    "Fully managed application service"
  ];

  return (
    <section className="py-16 bg-ubuntu-lightgrey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light mb-4">Public cloud optimization</h2>
        <p className="text-xl font-light mb-12">
          Most public cloud instances are Ubuntu, for performance and security.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <img
            src="https://assets.ubuntu.com/v1/86ee4118-uber-logo.png"
            alt="Uber"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/d1a04730-spotify-logo.png"
            alt="Spotify"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/ce3090ee-bnp-paribas-logo.png"
            alt="BNP Paribas"
            className="h-8 object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <ul className="space-y-4">
              {featuresLeft.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 text-ubuntu-orange mt-0.5 mr-2">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <ul className="space-y-4">
              {featuresRight.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 text-ubuntu-orange mt-0.5 mr-2">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="bg-ubuntu-orange text-white px-6 py-3 rounded text-center hover:bg-orange-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="text-ubuntu-orange hover:underline flex items-center justify-center"
          >
            Contact us ›
          </a>
        </div>
      </div>
    </section>
  );
}
