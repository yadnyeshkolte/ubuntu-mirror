import { useState } from "react";
import { Link } from "wouter";
import { Menu, Search, X } from "lucide-react";

type DropdownItem = {
  title: string;
  items: { name: string; url: string }[];
};

type NavDropdown = {
  name: string;
  categories: DropdownItem[];
};

const navItems: NavDropdown[] = [
  {
    name: "Products",
    categories: [
      {
        title: "Enterprise",
        items: [
          { name: "Ubuntu Pro", url: "#" },
          { name: "Security", url: "#" },
          { name: "Support", url: "#" },
        ],
      },
      {
        title: "Open Source",
        items: [
          { name: "Kubernetes", url: "#" },
          { name: "OpenStack", url: "#" },
          { name: "Ceph Storage", url: "#" },
        ],
      },
      {
        title: "Desktop",
        items: [
          { name: "Ubuntu Desktop", url: "#" },
          { name: "Desktop for enterprise", url: "#" },
        ],
      },
    ],
  },
  {
    name: "Services",
    categories: [
      {
        title: "Managed",
        items: [
          { name: "Managed Apps", url: "#" },
          { name: "Managed Infrastructure", url: "#" },
        ],
      },
      {
        title: "Support",
        items: [
          { name: "Enterprise Support", url: "#" },
          { name: "Technical Support", url: "#" },
        ],
      },
      {
        title: "Consulting",
        items: [
          { name: "Open Source Strategy", url: "#" },
          { name: "Implementation", url: "#" },
        ],
      },
    ],
  },
  {
    name: "Download",
    categories: [
      {
        title: "Desktop",
        items: [
          { name: "Ubuntu Desktop", url: "#" },
          { name: "Ubuntu Flavours", url: "#" },
        ],
      },
      {
        title: "Server",
        items: [
          { name: "Ubuntu Server", url: "#" },
          { name: "Cloud images", url: "#" },
        ],
      },
      {
        title: "IoT",
        items: [
          { name: "Ubuntu Core", url: "#" },
          { name: "Ubuntu for IoT", url: "#" },
        ],
      },
    ],
  },
];

const simpleLinkItems = [
  { name: "Blog", url: "#" },
  { name: "Tutorials", url: "#" },
  { name: "Community", url: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="ubuntu-header text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="mr-8">
              <img
                src="https://assets.ubuntu.com/v1/8114528b-picto-ubuntu-orange.png"
                alt="Ubuntu"
                className="h-8"
              />
            </Link>
            <nav className="hidden md:flex">
              {navItems.map((navItem) => (
                <div key={navItem.name} className="dropdown relative mx-4">
                  <button className="py-2 hover:text-ubuntu-orange flex items-center">
                    {navItem.name}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="dropdown-content py-8">
                    <div className="container mx-auto px-4">
                      <div className="grid grid-cols-3 gap-8">
                        {navItem.categories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-medium text-lg mb-4">
                              {category.title}
                            </h3>
                            <ul>
                              {category.items.map((item) => (
                                <li key={item.name} className="mb-2">
                                  <a
                                    href={item.url}
                                    className="hover:text-ubuntu-orange"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {simpleLinkItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="mx-4 py-2 hover:text-ubuntu-orange"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-sm hover:text-ubuntu-orange hidden md:block mr-4">
              Sign in
            </a>
            <a href="#" className="bg-ubuntu-orange text-white px-4 py-2 rounded hover:bg-orange-700">
              Search
            </a>
            <button
              className="ml-4 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2D3037] py-4">
          <div className="container mx-auto px-4">
            {navItems.map((navItem) => (
              <div key={navItem.name} className="mb-4">
                <div className="font-medium text-lg mb-2">{navItem.name}</div>
                <div className="pl-4">
                  {navItem.categories.map((category) => (
                    <div key={category.title} className="mb-3">
                      <div className="font-medium text-sm text-gray-400 mb-1">{category.title}</div>
                      <ul className="pl-2">
                        {category.items.map((item) => (
                          <li key={item.name} className="mb-1">
                            <a href={item.url} className="text-sm hover:text-ubuntu-orange">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {simpleLinkItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="block py-2 mb-2 hover:text-ubuntu-orange"
              >
                {item.name}
              </a>
            ))}
            
            <a href="#" className="block py-2 mb-2 hover:text-ubuntu-orange">
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
