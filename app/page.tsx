import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import CodingProfiles from "@/components/CodingProfiles";
import GitHubStats from "@/components/GitHubStats";
import Sidebar from "@/components/Sidebar";
import SocialLinks from "@/components/SocialLinks";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-primary/30">
      <BackgroundEffects />
      <Sidebar />
      <SocialLinks />

      <div className="pl-20 pr-20"> {/* Add padding to account for fixed sidebars */}
        <Hero />
        <About />
        <Skills />
        <OpenSource />
        <Projects />
        <CodingProfiles />
        <GitHubStats />

        {/* Spacer for scroll */}
        <div className="h-screen flex items-center justify-center text-white/10">
          Scroll for more... (Placeholder)
        </div>
      </div>

      {/* Background radial gradient spotlight following mouse could be added here */}
    </main>
  );
}
