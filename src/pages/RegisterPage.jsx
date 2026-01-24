import React from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { RegisterForm } from "../components/authenticationforms/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </>
  );
};
