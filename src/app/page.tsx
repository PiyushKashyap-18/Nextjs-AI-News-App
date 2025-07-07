import { WaitlistForm } from "./components/Landing/waitlisting-form";
import HeroNav from "./components/Landing/HeroNav";
import HeroSection from "./components/Landing/HeroSection";
import FeatureSection from "./components/Landing/FeatureSection";
import GettingStart from "./components/Landing/GettingStart";
import Pricing from "./components/Landing/Pricing";
import CTASection from "./components/Landing/CTASection";
import Footer from "./components/Landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <HeroNav />
      {/* Hero Section */}
      <HeroSection />
      {/* Features Section */}
      <FeatureSection />
      {/* How to start Section */}
      <GettingStart/>
      {/* Pricing Section */}
      <Pricing />
      {/* Waitlist Section */}
      <WaitlistForm />
      {/* CTA Section */}
      <CTASection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
