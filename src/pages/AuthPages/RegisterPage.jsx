import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";
import { RegisterForm } from "../../components/authforms/RegisterForm";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </>
  );
};
