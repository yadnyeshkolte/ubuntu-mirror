import { CheckIcon } from "lucide-react";

export default function OpenStackSection() {
  const featuresLeft = [
    "12 year security maintenance and support",
    "Hyperconverged or segregated architecture",
    "Encryption at rest for GDPR, HIPAA, FedRAMP",
    "Wide choice of SDN and storage"
  ];

  const featuresRight = [
    "Upgrades and day-2 operations, automated",
    "Integrated logging, monitoring, and alerting",
    "Platform and infrastructure hardening",
    "High availability",
    "Carrier-grade NFVI"
  ];

  return (
    <section className="py-16 bg-ubuntu-lightgrey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light mb-4">Carrier–grade private cloud</h2>
        <p className="text-xl font-light mb-12">
          Operate private cloud the smart way – supported or fully managed.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12 items-center">
          <img
            src="https://assets.ubuntu.com/v1/aabc2a34-bestbuy-logo.png"
            alt="Best Buy"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/83e8dd19-bt-logo.png"
            alt="BT"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/8b939be3-deutsche-telekom.png"
            alt="Deutsche Telekom"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/b6d5d92b-rabobank-logo.png"
            alt="Rabobank"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/2c5c1540-Bloomberg-Logo.png"
            alt="Bloomberg"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/99a69f52-ATT-Logo.png"
            alt="AT&T"
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
