import { CheckIcon } from "lucide-react";

export default function EngineerSection() {
  const features = [
    "Authentically open source",
    "Secure by design",
    "A release cadence you can depend on",
    "Stability through long term support",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-light mb-4">Energize your engineers</h2>
            <p className="text-xl font-light mb-6">
              Better security. More packages. Newer tools. All your open source, from cloud to edge.
            </p>
            <p className="mb-6">
              Loved by developers and trusted by enterprises. Ubuntu is the first pick for organizations to support their software infrastructure and the OS chosen by 66% of experienced developers. (HackerEarth, Developer Survey, 2020)
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
            <p className="mt-6">
              That's why Ubuntu supports the fastest, biggest, and most successful digital operations.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://assets.ubuntu.com/v1/a0ca630d-woman-computer@1x.jpg"
              alt="Engineer using Ubuntu"
              className="w-full rounded shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="#"
            className="block p-6 border border-gray-200 rounded hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-medium mb-3 text-ubuntu-orange">
              Download our guide to adopting Linux securely in your enterprise ›
            </h3>
          </a>
          <a
            href="#"
            className="block p-6 border border-gray-200 rounded hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-medium mb-3 text-ubuntu-orange">
              Build your AI models on Ubuntu ›
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}
