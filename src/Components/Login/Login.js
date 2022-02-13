import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginReset from "./LoginReset";
import LoginLost from "./LoginLost";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import NotFound from "../NotFound";

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="signUp" element={<LoginCreate />} />
          <Route path="lost" element={<LoginLost />} />
          <Route path="reset" element={<LoginReset />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};
