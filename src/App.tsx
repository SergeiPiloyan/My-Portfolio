import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./common/ThemeContext";
import { Hero } from "./components/Hero";
import "./App.css";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
