import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <About />
      <FeaturedWork />
      <Credentials />
      <Contact />
    </main>
  );
}
