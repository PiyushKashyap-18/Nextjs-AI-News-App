import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-12 bg-gray-50 dark:bg-gray-900 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                  <span className="text-white dark:text-black font-bold text-xl">
                    Q
                  </span>
                </div>
                <Link href={"/"} className="font-bold text-xl">
                  QuickSwipe
                </Link>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                The future of news consumption is here.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#waitlist">Join Our Newsletter</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="pointer-events-none">About</div>
                <div className="pointer-events-none">Blog</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="flex flex-col space-y-2 text-gray-600 dark:text-gray-300">
                <div className="pointer-events-none">Contact</div>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} QuickSwipesss. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-600 dark:text-gray-300">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <div className="pointer-events-none">Cookies</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
