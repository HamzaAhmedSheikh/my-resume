import About from "@/components/About";
import Contact from "@/components/projects/Contact";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import Footer from "@/components/projects/Footer";
export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Experience />
      <Projects />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
}

