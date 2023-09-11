import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 17rem;
  line-height: 15rem;
  display: inline-block;
  @media (max-width: 870px) {
    font-size: 12rem;
    line-height: 12rem;
  }
  @media (max-width: 650px) {
    font-size: 7rem;
    line-height: 7rem;
  }
`;
const Title2 = styled(Title)`
  color: #96f8ff;
`;

const TitleWrap = styled.div`
  overflow: hidden;
`;
const TitleMidWrap = styled.div`
  overflow: hidden;
  margin-left: 5rem;
`;
const TitleBtmWrap = styled.div`
  overflow: hidden;
  position: absolute;
  right: 5rem;
  bottom: 0;
`;
const EnterWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Enter = styled.h1`
  font-size: 120rem;
  line-height: 72rem;
`;
const Box = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box2 = styled.div`
  background-color: var(--color-light);
  height: 100vh;
  width: 5vw;
  opacity: 0;
  will-change: transform;
  z-index: 100;
`;

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //title animation
      const titles = gsap.utils.toArray(".title");
      const titleTl = gsap.timeline();
      titles.forEach((title) => {
        titleTl.fromTo(
          title,
          { yPercent: 100 },
          { yPercent: 0, duration: 0.3 }
        );
      });
      //enter scale
      gsap.set(".enter", {
        scale: 0.001,
        xPercent: -1.8,
        transformOrigin: "50% 50%",
        opacity: 0,
      });
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000px",
          scrub: true,
          pin: sectionRef.current,
          pinSpacing: true,
          //   markers: true,
        },
        defaults: { ease: "none" },
      });
      titleTl.add(enterTl);
      enterTl
        .set(".title1", { yPercent: 0 })
        .set(".title2", { yPercent: 0 })
        .set(".title3", { yPercent: 0 })
        .to(".title1", { xPercent: -20, yPercent: -200, duration: 3 })
        .to(".title2", { xPercent: -40, yPercent: -200, duration: 3 }, 0)
        .to(".title3", { xPercent: 40, yPercent: 200, duration: 3 }, 0)
        .to(".enter", { opacity: 1, duration: 10, scale: 0.5 }, "-=3")
        .to(".enter", { scale: 2, duration: 5 })
        .set(".box", { opacity: 1 })
        .to(".box", { width: "100vw", duration: 3 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      <TitleMidWrap>
        <TitleWrap>
          <Title className="title title1">WELCOME TO</Title>
        </TitleWrap>
        <Title2 className="title title2">CHARLIE</Title2>
      </TitleMidWrap>
      <TitleBtmWrap>
        <Title className="title title3">UNIVERSE</Title>
      </TitleBtmWrap>
      <EnterWrap>
        <Enter className="enter">ENTER</Enter>
      </EnterWrap>
      <Box>
        <Box2 className="box"></Box2>
      </Box>
    </Section>
  );
};

export default Header;
