import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;

  padding: 80px 15px;

  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Title = styled.h1`
  padding-bottom: 30px;

  font-weight: 500;
  font-size: 36px;

  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 28px;
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.6s ease-in-out;
`;

export const HoverContainer = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: opacity 0.6s ease-in-out;
  background: ${(props) => props.theme.colors.navbar};
  opacity: 0;
`;

export const Card = styled.div`
  width: 32%;
  height: 200px;

  position: relative;

  margin-bottom: 20px;
  overflow: hidden;

  border: ${(props) => `1px solid ${props.theme.colors.silverBackground}`};

  &:hover {
    ${HoverContainer} {
      opacity: 1;
    }

    ${Thumb} {
      transform: scale(1.1);
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 49%;
    height: 250px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 48%;
    height: 200px;
  }

  @media (max-width: 575px) {
    width: 100%;
    height: 200px;
  }
`;

export const Description = styled.h2`
  max-width: 100%;
  max-height: 60px;

  overflow: hidden;
  text-overflow: ellipsis;

  padding: 15px 15px 10px;

  background: ${(props) =>
    `linear-gradient(90deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary} )`};
  background-size: 110%;

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  font-size: 18px;
  cursor: default;
`;

export const Techs = styled.div`
  min-height: 20px;

  padding: 0px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tech = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.colors.text};

  cursor: default;
`;

export const LinkContainer = styled.div`
  padding: 10px 15px 20px;
  margin-top: 10px;

  display: flex;
  gap: 20px;
`;

export const Website = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};

  > svg {
    width: 30px;
    height: min-content;

    @media (max-width: 767px) {
      width: 35px;
    }
  }

  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
