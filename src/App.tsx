import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./common/ThemeContext";
import { Hero } from "./components/Hero";
import "./App.css";

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
    </ThemeProvider>
  );
};

export default App;
