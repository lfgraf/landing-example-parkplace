import Image from "next/image";

import Team from "@/components/team";
import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Team />
      <Contact />
    </main>
  );
}
