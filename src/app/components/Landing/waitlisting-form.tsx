"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { waitlistSchema } from "@/schemas/waitlist";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const SuccessMessage = () => (
  <Card
    id="waitlist"
    className="max-w-md mx-4  sm:mx-auto mb-8 border-2 border-black dark:border-white shadow-lg hover:shadow-xl transition-shadow"
  >
    <CardContent className="p-8 space-y-6 text-center">
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

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-green-800">
          You&apos;re on the list!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Thanks for joining our Newsletter!
        </p>
      </div>

      <Badge variant="outline" className="border-green-500 text-green-700">
        🎉 Welcome aboard!
      </Badge>
    </CardContent>
  </Card>
);

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const form = useForm<z.infer<typeof waitlistSchema>>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof waitlistSchema>) {
    setServerError("");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe. Please try again later.");
      }

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    }
  }

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    <Card
      id="waitlist"
      className="max-w-md mx-4 sm:mx-auto border-2 border-black dark:border-white mb-8"
    >
      <CardContent className="p-8 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Join Our Newsletter</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Be the first to experience the future of news consumption
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Your work email "
                      {...field}
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {serverError && (
              <p className="text-red-500 text-sm">{serverError}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-lg bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Joining...</span>
                </div>
              ) : (
                "Join Our Newsletter"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
