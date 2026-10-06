import NavBar from  "./components/navbar";
import Hero from  "./components/hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Features from "./components/Features/features";
import Pricing from "./components/Pricing/pricing";
import FaQ from "./components/FAQ/faq";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <TrustedCompanies />
      <Features />
      <Pricing />
      <FaQ />
      <Footer />
    </div>
  );
}

export default App;
