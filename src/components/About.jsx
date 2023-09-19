import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { styled } from "styled-components";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-light);
  color: var(--color-dark);
  padding: 5rem 5rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  @media (max-width: 870px) {
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const target = document.querySelector(".lines");
      const results = Splitting({ target: target, by: "lines" });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          //   markers: true,
        },
      });
      results[0].lines.forEach((e) => {
        tl.from(e, { opacity: 0, yPercent: 30, duration: 0.2 });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      <H1 className="lines">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        repellendus error ipsa quaerat ducimus enim accusamus cumque architecto
        voluptates aut, iure quas in nisi veritatis rem quidem non voluptatibus
        nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        repellendus error ipsa quaerat ducimus enim accusamus cumque architecto
        voluptates aut, iure quas in nisi veritatis rem quidem non voluptatibus
        nostrum.
      </H1>
    </Section>
  );
};

export default About;
