import React from "react";
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
      <footer style={{
        background: "#222222", color: "#7B7B7B",
        textAlign: "center", padding: "32px 8%",
        fontSize: "0.82rem", letterSpacing: "1px",
      }}>
        rahulramesharani@gmail.com &nbsp;|&nbsp; © {new Date().getFullYear()} Rahul R. All rights reserved.
      </footer>
    </>
  );
}
