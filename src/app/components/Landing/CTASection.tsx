import { Button } from "@/components/ui/button";
import React from "react";

const CTASection = () => {
  return (
    <div>
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Transform Your News Experience?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of users who&apos;ve already made the switch to
            smarter news consumption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto px-8 py-6 text-lg"
            >
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Try Premium
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
