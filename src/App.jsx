import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Header } from "../src/components/navbar/Header";
import { Profilebar } from "../src/components/profilebar/Profilebar";
import { Footer } from "../src/components/footer/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AllProducts } from "./pages/AllProducts";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Profilebar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<AllProducts />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>

        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default App;
