import { CheckIcon } from "lucide-react";

export default function EnterpriseSavings() {
  const features = [
    "No mandatory subscriptions for Ubuntu",
    "Security, support, and fully managed infra and apps",
    "Public cloud, data center, edge cluster, and appliances",
    "Long term maintenance commitment",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2 mb-8 md:mb-0 md:pl-12">
            <h2 className="text-3xl font-light mb-4">Significant enterprise savings</h2>
            <p className="text-xl font-light mb-6">
              Sustainable open source at the lowest cost, everywhere.
            </p>
            <p className="mb-8">
              Rethink what's possible with Linux and open source. Companies engage Canonical to drive down open source operating costs. Automate everything: multi-cloud operations, bare metal provisioning, edge clusters and IoT.
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
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
                Let's talk open source
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:order-1">
            <img
              src="https://assets.ubuntu.com/v1/fbd123d4-Significant%20enterprise%20savings.jpg"
              alt="Enterprise savings"
              className="w-full rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
