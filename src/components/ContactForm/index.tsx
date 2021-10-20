import { FormEvent, useState } from "react";
import {
  Button,
  ButtonLink,
  Container,
  EmailLink,
  FeedbackSendMessage,
  Form,
  InfoContainer,
  Input,
  Label,
  Message,
  SocialFooter,
  Title,
  Wrapper,
} from "./styles";

import { ReactComponent as EmailImg } from "../../assets/img/reading.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/githubMono.svg";
import { sendMessage } from "../../utils/sendMessage";

const accessKey = process.env.REACT_APP_STATIC_FORMS_ACCESS_KEY;

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmitForm(e: FormEvent) {
    e.preventDefault();

    const contact = {
      name: name,
      email: email,
      message: message,
      subject: "Mensagem de contato de camilaheinzmann.vercel.app",
      accessKey: accessKey,
    };

    try {
      const response = await sendMessage(contact);

      if (response) {
        setResponse("Sua mensagem foi enviada com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponse(
          "Ocorreu um erro ao enviar sua mensagem! Por favor, tente novamente mais tarde ;)"
        );
      }
    } catch (e) {
      setResponse(
        "Ocorreu um erro ao enviar sua mensagem! Por favor, tente novamente mais tarde ;)"
      );
    }

    setTimeout(() => {
      setResponse("");
    }, 5000);
  }

  return (
    <Wrapper>
      <Container>
        <Form onSubmit={handleSubmitForm} data-testid="contact-form">
          <Title>Contato</Title>
          <Label>Nome</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="form-name"
            required
          />
          <Label>E-mail</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="form-email"
            required
          />
          <Label>Mensagem</Label>
          <Message
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            data-testid="form-message"
            required
          />
          <Button type="submit" value="Enviar" data-testid="send-button" />
          <FeedbackSendMessage>{response}</FeedbackSendMessage>
        </Form>
        <InfoContainer>
          <EmailImg />
          <EmailLink href="mailto:camilapostai.ch@gmail.com">
            <EmailIcon />
            camilapostai.ch@gmail.com
          </EmailLink>
          <SocialFooter>
            <ButtonLink
              href="https://www.linkedin.com/in/camilaheinzmann/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon />
            </ButtonLink>
            <ButtonLink
              href="https://github.com/camilaheinzmann"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </ButtonLink>
          </SocialFooter>
        </InfoContainer>
      </Container>
    </Wrapper>
  );
}

export default ContactForm;
