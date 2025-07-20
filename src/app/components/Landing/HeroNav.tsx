"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const HeroNav = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="font-bold text-xl">
            QuickSwipe
          </Link>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="#features">
            <Button variant="ghost" className="hidden md:inline-flex">
              Features
            </Button>
          </Link>

          <Link href="#pricing">
            <Button variant="ghost" className="hidden md:inline-flex">
              Pricing
            </Button>
          </Link>

          {session ? (
            <Link href="/app">
              <Button variant="outline" size="sm">
                App
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeroNav;
