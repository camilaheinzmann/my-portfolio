import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedTheme from "./utils/usePersistedTheme";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ContactForm from "./components/ContactForm";

function App() {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav toggleTheme={toggleTheme} />
      <Banner />
      <AboutMe />
      <MyProjects />
      <ContactForm />
    </ThemeProvider>
  );
}

export default App;
