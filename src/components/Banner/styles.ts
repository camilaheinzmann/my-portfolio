import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;

  padding-top: 80px;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1170px;

  min-height: 350px;
  height: 75vh;
  max-height: 600px;

  padding: 0 15px;

  display: flex;
  position: relative;

  svg {
    position: absolute;
    left: 40%;
    top: -50%;

    g > use {
      fill: ${(props) => props.theme.colors.text};
    }

    @media (max-width: 767px) {
      z-index: -1;
      left: 50%;
      top: 0%;
      transform: translateX(-50%);
    }
  }
`;

export const InfoContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Subtitle = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.colors.textSecondary};

  @media (max-width: 767px) {
    text-align: center;
    color: ${(props) => props.theme.colors.textContrast};
  }
`;
