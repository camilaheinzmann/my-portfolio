import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.silverBackground};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  min-height: 550px;

  padding: 80px 15px;

  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  > svg {
    flex: 3;
    margin-right: 40px;
    height: min-content;

    @media (max-width: 768px) {
      width: 60%;
      max-width: 300px;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const AboutContainer = styled.div`
  height: 100%;
  flex: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    text-align: center;
    padding-top: 20px;
    flex: 1;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 28px;
  }
`;

export const About = styled.p`
  font-size: 20px;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ButtonLink = styled.a`
  padding: 15px 30px;
  text-decoration: none;
  color: #fff;

  background: ${(props) =>
    `linear-gradient(90deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary} )`};
  background-size: 150%;
  background-position: left center;

  transition: 0.5s ease;

  &:hover {
    background-position: right center;
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const Skills = styled.div`
  padding: 30px 0 20px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Badge = styled.div`
  width: 80px;
  height: 80px;

  margin: 10px;

  background: ${(props) => props.theme.colors.background};

  background-color: transparent;
  perspective: 1000px;
  text-align: center;

  &:hover > div {
    transform: rotateY(180deg);
  }
`;

export const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.background};

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  svg,
  img {
    width: 40px;
    height: min-content;
  }
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.background};
  transform: rotateY(180deg);

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  span {
  }
`;

export const LabelTech = styled.span`
  user-select: none;
  background: ${(props) =>
    `linear-gradient(90deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary} )`};
  background-size: 150%;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: center;
  font-weight: 700;
  font-size: 12px;
`;
