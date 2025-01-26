import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import CategoryProvider from "./Providers/CategoryProvider.jsx";
import { router } from "./routes/Router.jsx";
import "./index.css";
import ThemeProvider from "./Providers/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CategoryProvider>
  </StrictMode>,
);
