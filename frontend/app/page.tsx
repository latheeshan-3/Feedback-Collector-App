"use client";

import { useState, useEffect } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";

export default function HomePage() {
  const [reload, setReload] = useState(false);
  const [greeting, setGreeting] = useState("");
  const [displayedGreeting, setDisplayedGreeting] = useState("");

  // Determine greeting based on current hour
  useEffect(() => {
    const hour = new Date().getHours();
    let greetingText = "";

    if (hour >= 5 && hour < 12) {
      greetingText = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      greetingText = "Good Afternoon";
    } else {
      greetingText = "Good Evening";
    }

    setGreeting(greetingText);
  }, []);

 useEffect(() => {
  if (!greeting) return;

  setDisplayedGreeting(""); // reset before typing

  const typingInterval = setInterval(() => {
    setDisplayedGreeting((prev) => {
      if (prev.length < greeting.length) {
        return prev + greeting[prev.length]; // pick next char based on prev length
      } else {
        clearInterval(typingInterval);
        return prev;
      }
    });
  }, 100);

  return () => clearInterval(typingInterval);
}, [greeting]);


  const handleSuccess = () => {
    setReload((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Header section */}
      <div className="relative z-10 pt-20 pb-12 px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting with typing animation */}
          <div className="mb-6 min-h-[3rem]">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text inline-flex items-center gap-2">
              {displayedGreeting}
              <span className="inline-block w-0.5 h-8 bg-gradient-to-b from-amber-500 to-rose-500 animate-blink"></span>
            </h2>
          </div>

          {/* Logo/Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 rounded-3xl mb-6 shadow-2xl shadow-purple-500/30 transform hover:rotate-6 hover:scale-110 transition-all duration-300">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 tracking-tight">
            Feedback Portal
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-8">
            Share your thoughts and explore what others have to say
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse animation-delay-200"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse animation-delay-400"></div>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-300"></div>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
              <svg className="w-4 h-4 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
              <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">Community Driven</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-20 space-y-16">
        <FeedbackForm onSuccess={handleSuccess} />
        <FeedbackList reload={reload} />
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-8 text-center">
        <p className="text-gray-500 text-sm font-medium">Powered by your valuable feedback</p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s infinite; }

        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </main>
  );
}
