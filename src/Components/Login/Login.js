import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginPasswordReset from "./LoginPasswordReset";
import LoginPasswordLost from "./LoginPasswordLost";
import { UserContext } from "../../userContext";
import styles from "./Login.module.css";
import NotFound from "../NotFound";
import Head from "../Helper/Head";

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Head title="Faça o Login" />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginCreate />} />
          <Route path="recuperar-password" element={<LoginPasswordLost />} />
          <Route path="resetar-password" element={<LoginPasswordReset />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};
