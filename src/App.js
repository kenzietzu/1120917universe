import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import About from "./components/About";
import Slider from "./components/Slider";

function App() {
  const lenisRef = useRef(null);
  useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <>
      <GlobalStyles />
      <ReactLenis root ref={lenisRef} autoRaf={false}>
        <Header />
        <About />
        <Slider />
        <About />
      </ReactLenis>
    </>
  );
}

export default App;
