import NavBar from  "./components/navbar";
import Hero from  "./components/hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Features from "./components/Features/features";
import Demo from "./components/Demo/demo";
import HowItWorks from "./components/howitworks";
import Testimonials from "./components/testimonials/testimonials";
import Pricing from "./components/Pricing/pricing";
import FaQ from "./components/FAQ/faq";
import CTA from "./components/cta";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <Demo />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FaQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
