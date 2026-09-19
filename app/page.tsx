import Hero from "@/components/Hero";
import About from "@/components/About";
import VayuMeaning from "@/components/VayuMeaning";
import Philosophy from "@/components/Philosophy";
import Members from "@/components/Members";
import Gallery from "@/components/Gallery";
import Journey from "@/components/Journey";
import Social from "@/components/Social";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <VayuMeaning />
      <Philosophy />
      <Members />
      <Gallery />
      <Journey />
      <Social />
      <Footer />
    </main>
  );
}
