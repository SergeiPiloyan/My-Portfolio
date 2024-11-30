import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProviderContext } from "./common/ThemeContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  </StrictMode>
);
