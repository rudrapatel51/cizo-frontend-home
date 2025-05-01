import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DevelopSoftware from "./components/DevelopSoftware";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import DevelopmentApproach from "./components/DevelopmentApproach";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import BuildingProcess from "./components/BuildingProcess";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Resources from "./components/Resources";
import HireBanner from "./components/HireBanner";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
    });
  }, []);

  return (
    <div className="font-sans">
      <Header />
        <Hero />
      <div>
        <Services />
        <DevelopSoftware />
        <Partners />
        <Testimonials />
        <CaseStudies />
        <BuildingProcess />
        <DevelopmentApproach />
        <TechStack />
        <DevelopmentProcess />
        <Resources />
        <HireBanner />
      </div>
      <Footer />
    </div>
  );
};

export default App;
