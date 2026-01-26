import { Routes, Route } from "react-router";

import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { AllProducts } from "../pages/Products/AllProducts";
import { Contact } from "../pages/Contact/Contact";
import { Cart } from "../pages/Cart";
import { LoginPage } from "../pages/AuthPages/LoginPage";
import { RegisterPage } from "../pages/AuthPages/RegisterPage";
import { ForgotPasswordPage } from "../pages/AuthPages/ForgotPasswordPage";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="forgotpassword" element={<ForgotPasswordPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="products" element={<AllProducts />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </>
  );
};
