import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound: React.FC = () => {
  return (
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="ubuntu-header text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <Link href="/">
                <a className="flex items-center">
                  <img
                      src="https://assets.ubuntu.com/v1/8114528b-picto-ubuntu-orange.png"
                      alt="Ubuntu"
                      className="h-8 w-8 mr-3"
                  />
                  <span className="text-xl font-light">ubuntu</span>
                </a>
              </Link>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow flex flex-col items-center justify-center py-16 px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-8">
              <AlertCircle size={80} className="text-ubuntu-orange" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light mb-4">404: Page not found</h1>

            <div className="h-1 w-16 bg-ubuntu-orange mx-auto mb-8"></div>

            <p className="text-lg mb-10 text-gray-600">
              The page you are looking for either doesn't exist or has been moved.
              If you think this is an error, please contact the site administrator.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-ubuntu-orange hover:bg-ubuntu-orange/90">
                <Link href="/">
                  <a>Return to homepage</a>
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <a href="https://ubuntu.com/contact-us">
                  Contact support
                </a>
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-ubuntu-darkgrey text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <img
                    src="https://assets.ubuntu.com/v1/8114528b-picto-ubuntu-orange.png"
                    alt="Ubuntu"
                    className="h-8 w-8 inline-block mr-2"
                />
                <span className="text-sm">© 2025 Canonical Ltd. Ubuntu and Canonical are registered trademarks of Canonical Ltd.</span>
              </div>
              <div className="flex gap-6">
                <a href="https://ubuntu.com/legal" className="text-sm hover:text-ubuntu-orange">Legal information</a>
                <a href="https://ubuntu.com/privacy" className="text-sm hover:text-ubuntu-orange">Privacy policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default NotFound;