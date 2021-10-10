import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedTheme from "./utils/usePersistedTheme";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

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
    </ThemeProvider>
  );
}

export default App;
