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

  padding: 80px 15px 60px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 40%;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 55%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
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

export const Label = styled.label`
  margin-bottom: 2px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const Message = styled.textarea`
  height: 100px;

  margin-bottom: 20px;
  padding: 10px;

  outline: 0;
  resize: none;

  color: ${(props) => props.theme.colors.text};
  font-family: "Public Sans", sans-serif;

  background: ${(props) => props.theme.colors.background};
  border: 0;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.02);
`;

export const Button = styled.input`
  width: 100%;
  height: 40px;
  max-width: 250px;

  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  font-family: "Public Sans", sans-serif;

  background: ${(props) =>
    `linear-gradient(90deg, ${props.theme.colors.primary}, ${props.theme.colors.secondary} )`};
  background-size: 150%;
  background-position: left center;
  border: none;
  cursor: pointer;

  transition: 0.5s ease;

  &:hover {
    background-position: right center;
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;

  margin-bottom: 15px;
  padding: 10px;

  outline: 0;
  color: ${(props) => props.theme.colors.text};
  font-family: "Public Sans", sans-serif;

  background: ${(props) => props.theme.colors.background};
  border: 0;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.02);

  &:-webkit-autofill {
    -webkit-box-shadow: ${(props) =>
      `0 0 0 30px ${props.theme.colors.background} inset`};
    -webkit-text-fill-color: ${(props) => props.theme.colors.text} !important;
  }
`;

export const FeedbackSendMessage = styled.span`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.text};
`;

export const InfoContainer = styled.div`
  width: 45%;

  display: flex;
  flex-direction: column;

  svg {
    width: 100%;
    max-width: 380px;
    height: min-content;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 40%;
  }

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;

    > svg {
      display: none;
    }
  }
`;

export const EmailLink = styled.a`
  width: min-content;
  display: flex;
  align-items: center;

  margin-top: 20px;

  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  transition: color 0.2s;

  svg {
    width: 20px;
    margin-right: 10px;
  }
`;
export const SocialFooter = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ButtonLink = styled.a`
  width: 50px;
  height: 50px;

  display: flex;

  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.secondary};
  }

  svg {
    width: 25px;
    height: min-content;

    margin: auto;
    color: #fff;
  }
`;
