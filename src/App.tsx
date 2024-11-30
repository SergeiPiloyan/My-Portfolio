import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./common/ThemeContext";
import "./App.css";

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>Portfolio</>
    </ThemeProvider>
  );
};

export default App;
