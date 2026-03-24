import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Banner />
      <Contact />
      <footer className="footer">
        rahulramesharani@gmail.com &nbsp;|&nbsp; © {new Date().getFullYear()} Rahul R. All rights reserved.
      </footer>
    </>
  );
}
