import { Outlet } from "react-router-dom";
import { Header } from "../components/navbar/Header";
import { Footer } from "../components/footer/Footer";
import { Profilebar } from "../components/profilebar/Profilebar";

export const MainLayout = () => {
  return (
    <>
      <Profilebar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
