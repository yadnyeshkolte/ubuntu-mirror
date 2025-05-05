import { CheckIcon } from "lucide-react";

export default function KubernetesSection() {
  const featuresLeft = [
    "Support for all public cloud Kubernetes",
    "On-prem MicroK8s, Charmed K8s, kubeadm",
    "Fully managed Kubernetes on-prem or public cloud",
    "Model-driven Kubernetes Operators",
    "Full stack support for apps, Kubernetes and OS"
  ];

  const featuresRight = [
    "K8s architecture and deployment consulting",
    "Cloud-native workload migration services",
    "GPU enablement for AI/ML workloads",
    "Bare metal, OpenStack and VMware",
    "Pluggable CNIs, CSIs, CRIs, and third-party tools"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light mb-4">Multi-cloud Kubernetes and containers</h2>
        <p className="text-xl font-light mb-12">
          AKS. EKS. GKE. Kubeadm. MicroK8s. Charmed Kubernetes. All on Ubuntu.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 items-center">
          <img
            src="https://assets.ubuntu.com/v1/b0292231-aws-logo.png"
            alt="AWS"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/8e354832-is-dark=true.png"
            alt="GCP"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/9e14fd33-microsoft-azure-logo.png"
            alt="Microsoft Azure"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/6f7d29aa-liberty-global-logo.png"
            alt="Liberty Global"
            className="h-8 object-contain"
          />
          <img
            src="https://assets.ubuntu.com/v1/0f0a0c1d-aci-logo.png"
            alt="ACI"
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

        <div className="mt-12 text-center">
          <img
            src="https://assets.ubuntu.com/v1/1cbb17af-Multi-cloud%20Kubernetes%20%20and%20containers.png"
            alt="Multi-cloud Kubernetes"
            className="max-w-3xl mx-auto w-full"
          />
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
