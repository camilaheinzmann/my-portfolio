import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Card,
  Description,
  LinkContainer,
  Tech,
  Techs,
  Website,
  Wrapper,
  CardsContainer,
  HoverContainer,
  Thumb,
} from "./styles";

import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as OpenIcon } from "../../assets/icons/box-arrow.svg";

import bgImage from "../../assets/img/bg.jpg";
import { myRepositories } from "../../utils/myRepositories";

type Repositories = {
  id: number;
  name: string;
  website: string;
  repository: string;
  techs: string[];
  thumb: string;
};

function MyProjects() {
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  useEffect(() => {
    setRepositories(myRepositories);
  }, []);

  return (
    <Wrapper>
      <Container>
        <Title>Meus projetos</Title>
        <CardsContainer>
          {repositories.map((repository) => (
            <Card key={repository.id}>
              <Thumb src={bgImage} alt={repository.name} />
              <HoverContainer>
                <Description>{repository.name}</Description>
                <Techs>
                  {repository.techs.map((tech) => (
                    <Tech>{tech}</Tech>
                  ))}
                </Techs>
                <LinkContainer>
                  <Website
                    href={repository.repository}
                    target="_blank"
                    rel="noreferrer"
                    title="Ver no Github"
                  >
                    <GithubIcon />
                  </Website>
                  <Website
                    href={repository.website}
                    target="_blank"
                    rel="noreferrer"
                    title="Visualizar projeto"
                  >
                    <OpenIcon />
                  </Website>
                </LinkContainer>
              </HoverContainer>
            </Card>
          ))}
        </CardsContainer>
      </Container>
    </Wrapper>
  );
}

export default MyProjects;
