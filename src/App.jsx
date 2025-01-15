import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import FooterDesktop from "./components/footer/FooterDesktop";
import FooterPhone from "./components/footer/FooterPhone";
import Hero from "./components/hero/Hero";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col pb-20 md:p-0">
        <Header />
        <Hero />
      </div>
      {!isMobile ? <FooterDesktop /> : <FooterPhone />}
    </>
  );
}

export default App;
