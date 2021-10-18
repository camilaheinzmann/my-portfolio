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
  LabelTech,
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
              Oie!
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
                <LabelTech>HTML5</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <Css3Icon />
              </FrontCard>
              <BackCard>
                <LabelTech>CSS3</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <JavascriptIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>JavaScript</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <TypescriptIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>TypeScript</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <ReactIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>ReactJS</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <ReduxIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>Redux</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <JQueryIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>jQuery</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <SassIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>Sass</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <BootstrapIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>Bootstrap</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
          <Badge>
            <InnerCard>
              <FrontCard>
                <StyledComponentsIcon />
              </FrontCard>
              <BackCard>
                <LabelTech>Styled Components</LabelTech>
              </BackCard>
            </InnerCard>
          </Badge>
        </Skills>
      </Container>
    </Wrapper>
  );
}

export default AboutMe;
