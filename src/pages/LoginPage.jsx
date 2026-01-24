import React from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { LoginForm } from "../components/authenticationforms/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};
