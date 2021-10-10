import { Container, InfoContainer, Subtitle, Title, Wrapper } from "./styles";

import { ReactComponent as DesktopBg } from "../../assets/img/bg-intro-desktop.svg";

function Banner() {
  return (
    <Wrapper>
      <Container>
        <InfoContainer>
          <Title>Camila Heinzmann</Title>
          <Subtitle>Desenvolvedora front-end</Subtitle>
        </InfoContainer>
        <DesktopBg />
      </Container>
    </Wrapper>
  );
}

export default Banner;
