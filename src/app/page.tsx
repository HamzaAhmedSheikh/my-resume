import About from "@/components/Resume/About";
import Bot from "@/components/Resume/Bot";
import Contact from "@/components/Resume/Contact";
import Footer from "@/components/Resume/Footer";
import Hero from "@/components/Resume/Hero";
import Hireme from "@/components/Resume/Hireme";
import Projects from "@/components/Resume/Projects";
import Skills from "@/components/Resume/Skills";

export default function Home() {
  return (
    <>
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Hireme />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

