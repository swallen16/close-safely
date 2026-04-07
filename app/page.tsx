"use client";

import { useEffect, useState } from "react";

import About from "./components/About";
import CTA from "./components/CTA";
import CookieBanner from "./components/CookieBanner";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Why from "./components/Why";
import { ChatWidget } from "./components/chat";

export default function Home() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  const sections: Record<string, React.ReactNode> = {
    Home: (
      <>
        <Hero setActive={setActive} />
        <Why />
        <CTA />
      </>
    ),
    About: <About />,
    "How It Works": <HowItWorks />,
    Features: <Features />,
    Contact: <Contact />,
  };

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header active={active} setActive={setActive} />
      <main className="flex-1">{sections[active] ?? sections.Home}</main>
      <Footer setActive={setActive} />
      <CookieBanner />
      <ChatWidget />
    </div>
  );
}
