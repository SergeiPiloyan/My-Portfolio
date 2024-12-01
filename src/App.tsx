import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./common/ThemeContext";
import { Hero } from "./components/Hero";
import "./App.css";
import { Projects } from "./components/Porjects";

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <Projects />
    </ThemeProvider>
  );
};

export default App;
