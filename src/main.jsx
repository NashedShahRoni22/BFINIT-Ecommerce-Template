import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import CategoryProvider from "./Providers/CategoryProvider.jsx";
import { router } from "./routes/Router.jsx";
import "./index.css";
import ThemeProvider from "./Providers/ThemeProvider.jsx";
import CartProvider from "./Providers/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoryProvider>
      <CartProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </CartProvider>
    </CategoryProvider>
  </StrictMode>,
);
