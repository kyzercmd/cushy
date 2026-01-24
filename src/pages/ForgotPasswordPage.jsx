import React from "react";
import { AuthLayout } from "../layouts/AuthLayout";
import { ForgotPassword } from "../components/authenticationforms/ForgotPassword";

export const ForgotPasswordPage = () => {
  return (
    <>
      <AuthLayout>
        <ForgotPassword />
      </AuthLayout>
    </>
  );
};
