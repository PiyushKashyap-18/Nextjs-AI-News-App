import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl" />

        {/* Floating News Cards Animation */}
        <div className="absolute top-20 right-8 w-16 h-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 rotate-12 opacity-60" />
        <div className="absolute top-32 left-8 w-16 h-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 -rotate-6 opacity-40" />
        <div className="absolute bottom-32 right-16 w-16 h-24 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 rotate-6 opacity-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 text-sm font-medium text-slate-700 mb-8 shadow-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-2 animate-pulse" />
          AI-Powered News Platform
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight mb-6">
          News That Moves
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-light">
            With You
          </span>
        </h1>

        {/* Supporting Subheading */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Swipe through AI-powered news reels. Stay informed in seconds.
          <br />
          <span className="text-base text-slate-500">
            Get the world&apos;s most important stories, summarized and ready to
            consume.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-slate-300 hover:border-slate-400 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
          >
            Login
          </Button>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">
              Lightning Fast
            </h3>
            <p className="text-sm text-slate-600 text-center">
              60-second summaries
            </p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">AI-Powered</h3>
            <p className="text-sm text-slate-600 text-center">Smart curation</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-800 mb-1">Mobile First</h3>
            <p className="text-sm text-slate-600 text-center">
              Swipe to explore
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
    </section>
  );
}
