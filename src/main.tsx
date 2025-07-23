import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { SectionSpyProvider } from "./context/SectionSpyProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SectionSpyProvider>
        <App />
      </SectionSpyProvider>
    </ThemeProvider>
  </StrictMode>,
);
