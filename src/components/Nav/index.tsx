import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import { ReactComponent as LogoImg } from "../../assets/img/logo.svg";

import { Container, Wrapper } from "./styles";

interface NavProps {
  toggleTheme(): void;
}

function Nav({ toggleTheme }: NavProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Wrapper id="home">
      <Container>
        <LogoImg />
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={50}
          handleDiameter={25}
          onHandleColor={colors.primary}
          offHandleColor={colors.secondary}
          offColor={shade(0.15, colors.background)}
          onColor={colors.background}
        />
      </Container>
    </Wrapper>
  );
}

export default Nav;
