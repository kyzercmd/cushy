import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { MainLayout } from "./layouts/MainLayout";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AllProducts } from "./pages/AllProducts";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="products" element={<AllProducts />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </>
    </QueryClientProvider>
  );
}

export default App;
