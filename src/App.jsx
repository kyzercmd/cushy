import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import "./App.css";
import { Header } from "../src/components/navbar/Header";
import { Profilebar } from "../src/components/profilebar/Profilebar";
import { Footer } from "../src/components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { FeaturedProducts } from "./components/featuredproducts/FeaturedProducts";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Profilebar />

        <Header />
        <Hero />
        <FeaturedProducts />

        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default App;
