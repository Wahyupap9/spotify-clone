import { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    document.title = "Spotify Clone";
  }, []);

  return (
    <>
      <div className="flex flex-col pb-20 md:p-0">
        <Header />
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default App;
