import AboutHomeSection from "./sections/AboutHomeSection";
import HighlightsHomeSection from "./sections/HighlightsHomeSection";
import TeamHomeSection from "./sections/TeamHomeSection";

export default function Home() {

  return (
    <main className="text-black">
      <AboutHomeSection />
      <HighlightsHomeSection />
      <TeamHomeSection />
    </main>
  );
}