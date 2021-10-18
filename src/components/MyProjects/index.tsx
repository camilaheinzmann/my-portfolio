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

import GalileoChatImg from "../../assets/img/projects/galileo.png";
import LatinhasPorPatinhasImg from "../../assets/img/projects/lpp.png";
import CamKanbanImg from "../../assets/img/projects/camkanban.png";
import ClimaFacilImg from "../../assets/img/projects/climafacil.png";
import ContactFormDarkImg from "../../assets/img/projects/contact-form-dark.png";
import ToDoListImg from "../../assets/img/projects/to-do-list.png";

export const myRepositories = [
  {
    id: 1,
    name: "GALILEOchat",
    website: "https://galileo-chat.vercel.app/",
    repository: "https://github.com/camilaheinzmann/galileo-chat",
    techs: ["typescript", "react", "firebase", "styled-components"],
    thumb: GalileoChatImg,
  },
  {
    id: 2,
    name: "Latinhas por Patinhas",
    website: "https://latinhasporpatinhas.netlify.app/",
    repository: "https://github.com/camilaheinzmann/latinhas-por-patinhas",
    techs: ["javascript", "react"],
    thumb: LatinhasPorPatinhasImg,
  },
  {
    id: 3,
    name: "React CamKanban",
    website: "https://react-camkanban.netlify.app/",
    repository: "https://github.com/camilaheinzmann/react-kanban",
    techs: ["javascript", "react", "material-ui", "sass"],
    thumb: CamKanbanImg,
  },
  {
    id: 4,
    name: "Clima Fácil",
    website: "https://clima-facil.netlify.app/",
    repository: "https://github.com/camilaheinzmann/clima-facil",
    techs: ["typescript", "react"],
    thumb: ClimaFacilImg,
  },
  {
    id: 5,
    name: "Formulário: Dark mode com jQuery",
    website: "https://camilaheinzmann.github.io/contact-form/",
    repository: "https://github.com/camilaheinzmann/contact-form",
    techs: ["html", "css", "javascript", "jquery"],
    thumb: ContactFormDarkImg,
  },
  {
    id: 6,
    name: "Lista de Tarefas",
    website: "https://my-to-do-list-ch.netlify.app/",
    repository: "https://github.com/camilaheinzmann/my-to-do-list",
    techs: ["html", "css", "javascript"],
    thumb: ToDoListImg,
  },
];

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
              <Thumb src={repository.thumb} alt={repository.name} />
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
