// import { OnboardingForm } from "@/components/onboarding-form";

import Link from "next/link";
import { OnboardingForm } from "../components/onboarding/OnboardingForm";

export default function OnboardingPage() {
  return (
    <div className="relative flex flex-col items-center pt-12 pb-20 px-4 sm:px-8 font-[family-name:var(--font-geist-sans)] min-h-screen">
      {/* Top bar with Skip for now aligned right */}
      <div className="w-full max-w-2xl flex justify-end items-center mb-12">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:underline"
        >
          Skip for now
        </Link>
      </div>

      <main className="flex flex-col gap-8 items-center w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center">
          What do you want to see on QuickSwipe?
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Select your interests to personalize your news feed. You can change
          them anytime.
        </p>
        <OnboardingForm />
      </main>
    </div>
  );
}
