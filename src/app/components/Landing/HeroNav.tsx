import { Button } from "@/components/ui/button";
import React from "react";

const HeroNav = () => {
  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="font-bold text-xl">NewsReels</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Features
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              Pricing
            </Button>
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-black hover:bg-gray-800">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeroNav;
