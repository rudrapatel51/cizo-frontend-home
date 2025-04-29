import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import DevelopSoftware from "./components/DevelopSoftware"
import ClientLogos from "./components/ClientLogos"
import Testimonials from "./components/Testimonials"
import CaseStudies from "./components/CaseStudies"
import WaysOfWorking from "./components/WaysOfWorking"
import DevelopmentApproach from "./components/DevelopmentApproach"
import TechStack from "./components/TechStack"
import FeatureWorks from "./components/FeatureWorks"
import Featured from "./components/Featured"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"
import Partners from "./components/Partners"

const App = () => {
  return (
    <div className="font-sans">
    <Header />
    <main className="p-6 lg:px-24">
      <Hero />
      </main>
      <div>
      <Services />
      <DevelopSoftware />
      <Partners/>
      {/* <ClientLogos /> */}
      {/* <Testimonials /> */}
      {/* <CaseStudies /> */}
      {/* <WaysOfWorking /> */}
      {/* <DevelopmentApproach /> */}
      {/* <TechStack /> */}
      {/* <FeatureWorks /> */}
      {/* <Featured /> */}
      {/* <CtaSection /> */}
      </div>
          <Footer />
  </div>
  )
}

export default App
