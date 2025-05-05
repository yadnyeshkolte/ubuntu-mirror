export default function Footer() {
  const footerSections = [
    {
      title: "Ubuntu",
      links: [
        { name: "Download", url: "#" },
        { name: "Install", url: "#" },
        { name: "Ubuntu Desktop", url: "#" },
        { name: "Ubuntu Server", url: "#" },
        { name: "Ubuntu for IoT", url: "#" },
        { name: "All products", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Support", url: "#" },
        { name: "Web hosting", url: "#" },
        { name: "Management", url: "#" },
        { name: "Consulting", url: "#" },
        { name: "Training", url: "#" },
        { name: "All services", url: "#" },
      ],
    },
    {
      title: "Cloud",
      links: [
        { name: "Public cloud", url: "#" },
        { name: "Private cloud", url: "#" },
        { name: "Containers", url: "#" },
        { name: "Managed", url: "#" },
        { name: "Build a cloud", url: "#" },
        { name: "All cloud", url: "#" },
      ],
    },
    {
      title: "Security",
      links: [
        { name: "Ubuntu Pro", url: "#" },
        { name: "Hardening", url: "#" },
        { name: "Certification", url: "#" },
        { name: "CVE Database", url: "#" },
        { name: "Security notices", url: "#" },
        { name: "All security", url: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Ubuntu Forum", url: "#" },
        { name: "Community hub", url: "#" },
        { name: "Discourse", url: "#" },
        { name: "Community teams", url: "#" },
        { name: "Participate", url: "#" },
        { name: "All community", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resources", url: "#" },
        { name: "Documentation", url: "#" },
        { name: "Tutorials", url: "#" },
        { name: "Videos", url: "#" },
        { name: "Case studies", url: "#" },
        { name: "White papers", url: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About Ubuntu", url: "#" },
        { name: "Canonical", url: "#" },
        { name: "Blog", url: "#" },
        { name: "Press centre", url: "#" },
        { name: "Careers", url: "#" },
        { name: "Contact us", url: "#" },
      ],
    },
  ];

  const legalLinks = [
    { name: "Legal information", url: "#" },
    { name: "Data privacy", url: "#" },
    { name: "Report a bug", url: "#" },
  ];

  return (
    <footer className="bg-ubuntu-darkgrey text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.slice(0, 4).map((section) => (
            <div key={section.title}>
              <h3 className="text-xl mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="hover:text-ubuntu-orange">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.slice(4).map((section) => (
            <div key={section.title}>
              <h3 className="text-xl mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="hover:text-ubuntu-orange">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                &copy; 2023 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.
              </p>
            </div>
            <div className="flex space-x-4">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-ubuntu-orange"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
