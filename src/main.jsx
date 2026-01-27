import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { ScrollToTop } from "./helper/ScrollToTop.jsx";
import { AuthContextProvider } from "./providers/AuthContext.jsx";
import { CartContextProvider } from "./providers/CartContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <AuthContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  </StrictMode>,
);
