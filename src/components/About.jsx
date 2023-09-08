import { styled } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-light);
  color: var(--color-dark);
`;

const H1 = styled.h1`
  font-size: 6rem;
`;

const About = () => {
  return (
    <Section>
      <H1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        repellendus error ipsa quaerat ducimus enim accusamus cumque architecto
        voluptates aut, iure quas in nisi veritatis rem quidem non voluptatibus
        nostrum.
      </H1>
    </Section>
  );
};

export default About;
