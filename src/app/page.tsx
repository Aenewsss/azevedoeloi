"use client"

import AboutHomeSection from "./sections/AboutHomeSection";
import HighlightsHomeSection from "./sections/HighlightsHomeSection";

export default function Home() {

  return (
    <main className="text-black">
      <AboutHomeSection />
      <HighlightsHomeSection />
    </main>
  );
}