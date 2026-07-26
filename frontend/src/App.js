import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import About from "@/components/site/About";
import Skills from "@/components/site/Skills";
import Experience from "@/components/site/Experience";
import Projects from "@/components/site/Projects";
import Academic from "@/components/site/Academic";
import Manifesto from "@/components/site/Manifesto";
import Pipeline from "@/components/site/Pipeline";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

function Portfolio() {
  useLenis();
  return (
    <div className="App noise-overlay bg-background text-foreground min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Academic />
        <Manifesto />
        <Pipeline />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
