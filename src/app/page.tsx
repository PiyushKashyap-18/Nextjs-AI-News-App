import { WaitlistForm } from "./components/Landing/waitlisting-form";
import HeroNav from "./components/Landing/HeroNav";
import HeroSection from "./components/Landing/HeroSection";
import FeatureSection from "./components/Landing/FeatureSection";
import GettingStart from "./components/Landing/GettingStart";
import Pricing from "./components/Landing/Pricing";
import Footer from "./components/Landing/Footer";
import SessionProvider from "./components/SessionProvider";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <SessionProvider>
        <HeroNav />
        {/* rest of page */}
      </SessionProvider>
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeatureSection />
      {/* How to start Section */}
      <GettingStart />
      {/* Pricing Section */}
      <Pricing />
      {/* Waitlist Section */}
      <WaitlistForm />
      {/* Footer */}
      <Footer />
    </div>
  );
}
