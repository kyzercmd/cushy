import React from "react";
import { AuthLayout } from "../../layouts/AuthLayout";
import { LoginForm } from "../../components/authforms/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};
