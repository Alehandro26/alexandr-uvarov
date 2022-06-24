import { Outlet } from "react-router-dom";
import "./App.scss";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
  });

  return (
    <>
      <progress max="100" value="0"></progress>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
