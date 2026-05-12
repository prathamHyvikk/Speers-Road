import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import InfoStrip from "../components/InfoStrip";
import CtaBanner from "../components/CtaBanner";

import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
     
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyChoose />
        <Testimonials />
        <InfoStrip />
        <CtaBanner />
      </main>
      
    </>
  );
}
