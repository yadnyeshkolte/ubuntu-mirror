import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <img
              src="https://assets.ubuntu.com/v1/8114528b-picto-ubuntu-orange.png"
              alt="Ubuntu Logo"
              className="h-16 w-16 mx-auto mb-6"
          />
          <h1 className="text-4xl font-light text-ubuntu-orange mb-4">
            404 | Page Not Found
          </h1>
          <p className="text-lg mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button className="bg-ubuntu-orange hover:bg-orange-600 text-white">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
  );
};

export default NotFound;