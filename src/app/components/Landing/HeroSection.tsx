import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              🚀 Early access now open for beta users.
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                News That
                <br />
                <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                  Never Stops
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Swipe through AI-powered news reels. Stay informed in seconds
                with personalized stories that matter to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-lg bg-black hover:bg-gray-800"
              >
                Start Reading Now
              </Button>
            </div>

            {/* Hero Visual - iPhone Style */}
            <div className="pt-12 relative">
              <div className="mx-auto max-w-xs">
                {/* iPhone Frame */}
                <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10"></div>

                    {/* Status Bar */}
                    <div className="bg-white text-black px-6 pt-4 pb-2 flex justify-center items-center">
                      {/* WiFi icon only */}
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                      </svg>
                    </div>

                    {/* News Reel Content */}
                    <div className="aspect-[9/16] relative bg-gradient-to-br from-gray-900 to-black flex flex-col justify-between p-6 text-white">
                      <div className="flex items-center justify-between">
                        <Badge className="bg-red-600 hover:bg-red-600 text-white border-0">
                          Breaking
                        </Badge>
                        <div className="text-sm text-gray-300">2 min read</div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-bold leading-tight">
                          AI Revolution Transforms Global Markets in
                          Unprecedented Ways
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Major tech companies announce breakthrough AI
                          developments, reshaping industries worldwide with
                          innovative solutions...
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                            T
                          </div>
                          <span className="text-xs text-gray-400">
                            TechNews • 5 min ago
                          </span>
                        </div>
                      </div>

                      {/* Swipe Indicator */}
                      <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-1 opacity-60">
                        <div className="text-xs text-gray-400">Swipe up</div>
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="bg-white py-2 flex justify-center">
                      <div className="w-32 h-1 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
