import { CheckIcon } from "lucide-react";

export default function IoTSection() {
  const featuresLeft = [
    "OTA compressed updates for apps, kernel, and OS",
    "Automatic rollback and data snapshots",
    "Managed private app stores for secure fleet management",
    "DevSecOps pipeline for edge app delivery",
    "Built-in device recovery and remote disk repair"
  ];

  const featuresRight = [
    "12 year security maintenance for every device",
    "Provable system and software integrity",
    "Secure boot backed by root of trust",
    "Support for real-time compute",
    "FIPS certifiable embedded Linux"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-light mb-4">Ultra secure things</h2>
            <p className="text-xl font-light mb-12">
              Ubuntu Core with transactional updates for a better embedded Linux.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 items-center">
              <img
                src="https://assets.ubuntu.com/v1/86b50f30-intel-new-logo.png"
                alt="Intel"
                className="h-8 object-contain"
              />
              <img
                src="https://assets.ubuntu.com/v1/1af15900-rexroth-logo.png"
                alt="Rexroth"
                className="h-8 object-contain"
              />
              <img
                src="https://assets.ubuntu.com/v1/0d5fc741-arm-logo.png"
                alt="ARM"
                className="h-8 object-contain"
              />
              <img
                src="https://assets.ubuntu.com/v1/703330cd-dell-technologies-logo-white.png"
                alt="Dell"
                className="h-8 object-contain invert"
              />
              <img
                src="https://assets.ubuntu.com/v1/d689e3b6-advantech-logo.png"
                alt="Advantech"
                className="h-8 object-contain"
              />
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-4">
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

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
          <div className="md:w-1/2">
            <img
              src="https://assets.ubuntu.com/v1/21ef9142-Ultra%20Secure%20Things.png"
              alt="Ultra Secure Things"
              className="w-full rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
