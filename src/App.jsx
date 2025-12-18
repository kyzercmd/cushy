import "./App.css";
import { Header } from "../src/components/navbar/Header";
import { Profilebar } from "../src/components/profilebar/Profilebar";
import { Footer } from "../src/components/footer/Footer";
import { Hero } from "./components/hero/Hero";

function App() {
  return (
    <>
      <Profilebar />

      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
