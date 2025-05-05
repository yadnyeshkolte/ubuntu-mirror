import { CheckIcon } from "lucide-react";

export default function WorkstationSection() {
  const features = [
    "Active Directory and LDAP integration",
    "Full disk encryption"
  ];

  return (
    <section className="py-16 bg-ubuntu-lightgrey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light mb-4">Workstations and desktops</h2>
        <p className="text-xl font-light mb-6">Optimized AI/ML and cloud devops.</p>
        <p className="text-xl font-light mb-12">The professional developer's preference.</p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12 items-center">
          <img
            src="https://assets.ubuntu.com/v1/3e3e698b-nvidia-logo.png"
            alt="Nvidia"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/86b50f30-intel-new-logo.png"
            alt="Intel"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/cc247653-amd-logo.png"
            alt="AMD"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/af7e6fff-hp-logo.png"
            alt="HP"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/703330cd-dell-technologies-logo-white.png"
            alt="Dell"
            className="h-8 object-contain invert"
          />
          <img
            src="https://assets.ubuntu.com/v1/dc74391e-lenovo-logo.png"
            alt="Lenovo"
            className="h-8 object-contain"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-full">
            <ul className="space-y-4">
              {features.map((feature, index) => (
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
      </div>
    </section>
  );
}
