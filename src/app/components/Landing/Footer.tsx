import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="font-bold text-xl">NewsReels</span>
              </div>
              <p className="text-gray-600">
                The future of news consumption is here.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-gray-600">
                <div>Features</div>
                <div>Pricing</div>
                <div>API</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-gray-600">
                <div>About</div>
                <div>Blog</div>
                <div>Careers</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-gray-600">
                <div>Help Center</div>
                <div>Contact</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © 2024 NewsReels. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-600">
              <div>Terms</div>
              <div>Privacy</div>
              <div>Cookies</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
