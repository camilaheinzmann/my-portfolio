import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 3;

  background: ${(props) => props.theme.colors.navbar};

  @media (max-width: 767px) {
    height: 60px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1170px;

  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
