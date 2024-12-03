import React, { createContext, useContext, useMemo, useState } from "react";
import { createTheme, Theme } from "@mui/material/styles";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark" && {
            background: {
              default: "#222",
            },
            primary: {
              main: "#fff",
              contrastText: "#222",
            },
          }),
          ...(mode === "light" && {
            primary: {
              main: "#0987f2",
            },
          }),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                [`@media (max-width:800px)`]: {
                  display: "flex",
                  justifyContent: "center",
                },
                transition: "background-color 0.4s ease",
                margin: "0 auto 60px",
              },
              "#root": {
                display: "flex",
                flexDirection: "column",
                gap: "60px",
                [`@media (min-width:800px)`]: {
                  gap: "200px",
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProviderContext");
  }
  return context;
};
