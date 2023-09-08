import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { styled } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-light);
  color: var(--color-dark);
  display: flex;
  align-items: center;
`;

const StickyParent = styled.div``;
const StickyChild = styled.div``;
const Scroll = styled.div`
  display: flex;
  will-change: transform;
`;
const Image = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  padding: 0 2rem;
`;

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const scrollRef = useRef(null);
  const images = [
    "https://images.unsplash.com/photo-1486133195063-ede2a1c5e061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1518122043280-ffd6c8f273d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2333&q=80",
    "https://images.unsplash.com/photo-1519928649092-5d3ac45a5800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
    "https://images.unsplash.com/photo-1519669417670-68775a50919c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80",
    "https://images.unsplash.com/photo-1485120750507-a3bf477acd63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1535365229039-e36084b548f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1531686669028-c55493110d74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  ];
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let scrollWidth = sectionRef.current.clientWidth;
      let scroll = scrollRef.current.scrollWidth;
      let scrollTransform = scroll - scrollWidth;
      gsap.to(scrollRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + scroll,
          pin: true,
          scrub: true,
          markers: true,
        },
        x: "-=" + scrollTransform + "px",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      <StickyParent>
        <StickyChild ref={stickyRef}>
          <Scroll ref={scrollRef}>
            {images.map((image, i) => {
              return <Image src={image} alt={i} key={i} />;
            })}
          </Scroll>
        </StickyChild>
      </StickyParent>
    </Section>
  );
};

export default Slider;
