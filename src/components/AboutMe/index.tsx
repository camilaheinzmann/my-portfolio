import {
  About,
  Badge,
  Container,
  InfoContainer,
  AboutContainer,
  Skills,
  Title,
  Wrapper,
  InnerCard,
  FrontCard,
  BackCard,
} from "./styles";

import { ReactComponent as GirlProgramming } from "../../assets/img/girl-programming.svg";

import { ReactComponent as Html5Icon } from "../../assets/icons/html5.svg";
import { ReactComponent as Css3Icon } from "../../assets/icons/css3.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/javascript.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/icons/typescript.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/icons/redux.svg";
import { ReactComponent as JQueryIcon } from "../../assets/icons/jquery.svg";
import { ReactComponent as SassIcon } from "../../assets/icons/sass.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/icons/bootstrap.svg";
import { ReactComponent as StyledComponentsIcon } from "../../assets/icons/styled-components.svg";

function AboutMe() {
  return (
    <Wrapper>
      <Container>
        <InfoContainer>
          <AboutContainer>
            <Title>Sobre mim</Title>
            <About>
              <strong>Oie!</strong>
              <br />
              Me chamo Camila Heinzmann, tenho 25 anos, sou bacharela em Ciência
              da Computação e Desenvolvedora Front-end.
              <br />
              <br />
              Nos cards abaixo as principais techs que possuo conhecimento.
            </About>
          </AboutContainer>
          <GirlProgramming />
        </InfoContainer>
        <Skills>
          <Badge>
            <InnerCard>
              <FrontCard>
                <Html5Icon />
              </FrontCard>
              <BackCard>
                <span>HTML5</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <Css3Icon />
              </FrontCard>
              <BackCard>
                <span>CSS3</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <JavascriptIcon />
              </FrontCard>
              <BackCard>
                <span>Javascript</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <TypescriptIcon />
              </FrontCard>
              <BackCard>
                <span>Typescript</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <ReactIcon />
              </FrontCard>
              <BackCard>
                <span>ReactJS</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <ReduxIcon />
              </FrontCard>
              <BackCard>
                <span>Redux</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <JQueryIcon />
              </FrontCard>
              <BackCard>
                <span>jQuery</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <SassIcon />
              </FrontCard>
              <BackCard>
                <span>Sass</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <BootstrapIcon />
              </FrontCard>
              <BackCard>
                <span>Bootstrap</span>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <StyledComponentsIcon />
              </FrontCard>
              <BackCard>
                <span>Styled Components</span>
              </BackCard>
            </InnerCard>
          </Badge>
        </Skills>
      </Container>
    </Wrapper>
  );
}

export default AboutMe;
