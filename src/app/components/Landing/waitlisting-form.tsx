"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);

      setIsSubmitted(true);
      setEmail("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto border-2 border-green-200 bg-green-50">
        <CardContent className="p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-800">
            You&apos;re on the list!
          </h3>
          <p className="text-green-700">
            Thanks for joining our waitlist. We&apos;ll notify you as soon as
            NewsReels is ready!
          </p>
          <Badge variant="outline" className="border-green-500 text-green-700">
            🎉 Welcome aboard!
          </Badge>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-black">
      <CardContent className="p-8 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Join the Waitlist</h3>
          <p className="text-gray-600">
            Be the first to experience the future of news consumption
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 focus:border-black"
              disabled={isSubmitting}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg bg-black hover:bg-gray-800 disabled:opacity-50"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Joining...</span>
              </div>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </CardContent>
    </Card>
  );
}
