import { CheckIcon } from "lucide-react";

export default function SecuritySection() {
  const securityFeatures = [
    "Up to 12 years of security maintenance",
    "Kernel Livepatch for 24/7 patching with no downtime",
    "Expanded security for infrastructure and applications",
    "FIPS 140-2 cryptographic modules certified by NIST",
  ];

  return (
    <section className="py-16 bg-ubuntu-lightgrey">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-light mb-4">Open source security</h2>
            <p className="text-xl font-light mb-2">Ubuntu Pro is more than Linux.</p>
            <p className="text-xl font-light mb-6">
              Security and compliance for the full stack.
            </p>
            <p className="mb-8">
              Secure your open source apps. Patch the full stack, from kernel to library and applications, for CVE compliance. Governments and auditors certify Ubuntu for FedRAMP, FISMA and HITECH.
            </p>
            <ul className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 text-ubuntu-orange mt-0.5 mr-2">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="bg-ubuntu-orange text-white px-6 py-3 rounded hover:bg-orange-700"
              >
                Secure all your open source
              </a>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-3 gap-4 items-center">
            <img
              src="https://assets.ubuntu.com/v1/22c5fb07-nist-logo.png"
              alt="NIST"
              className="w-full max-h-12 object-contain"
            />
            <img
              src="https://assets.ubuntu.com/v1/2354ee4f-@sec-logo.png"
              alt="ASEC"
              className="w-full max-h-12 object-contain"
            />
            <img
              src="https://assets.ubuntu.com/v1/c7af6eb5-disa-logo.png"
              alt="DISA"
              className="w-full max-h-12 object-contain"
            />
            <img
              src="https://assets.ubuntu.com/v1/4710d3ba-cis-logo.png"
              alt="CIS"
              className="w-full max-h-12 object-contain"
            />
            <img
              src="https://assets.ubuntu.com/v1/aa0ad2ff-csec-logo.png"
              alt="CSEC"
              className="w-full max-h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
