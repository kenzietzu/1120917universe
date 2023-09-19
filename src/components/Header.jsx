import { CameraShake, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import * as THREE from "three";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;

const Title = styled.h1`
  font-size: 17rem;
  line-height: 15rem;
  display: inline-block;
  @media (max-width: 870px) {
    font-size: 12rem;
    line-height: 12rem;
  }
  @media (max-width: 680px) {
    font-size: 8rem;
    line-height: 8rem;
  }
`;
const Title2 = styled(Title)`
  color: #96f8ff;
`;

const TitleContainer = styled.div`
  position: absolute;
  padding-left: 4rem;
`;

const TitleWrap = styled.div`
  overflow: hidden;
  padding-left: 1rem;
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

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
}

const Header = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      //title animation
      const titles = gsap.utils.toArray(".title");
      const titleTl = gsap.timeline();
      titles.forEach((title) => {
        titleTl.fromTo(title, { y: 200 }, { y: 0, duration: 0.3 });
      });
      //enter scale
      gsap.set(".enter", {
        scale: 0.001,
        xPercent: -1,
        transformOrigin: "50% 50%",
        opacity: 0.5,
      });
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000px",
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
    <>
      <Section ref={sectionRef}>
        <Canvas>
          <Stars radius={10} count={1000} speed={2} factor={4} fade />
          <Rig />
        </Canvas>
        <TitleContainer>
          <TitleWrap>
            <Title className="title title1">WELCOME TO</Title>
          </TitleWrap>
          <TitleWrap>
            <Title2 className="title title2">CHARLIE</Title2>
          </TitleWrap>
        </TitleContainer>
        <TitleBtmWrap>
          <Title className="title title3">GALAXY</Title>
        </TitleBtmWrap>
        <EnterWrap>
          <Enter className="enter">ENTER</Enter>
        </EnterWrap>
        <Box>
          <Box2 className="box"></Box2>
        </Box>
      </Section>
    </>
  );
};

export default Header;
