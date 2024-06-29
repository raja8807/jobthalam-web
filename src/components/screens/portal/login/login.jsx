import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useState } from "react";
import styles from "./login.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import supabase from "@/utils/supabase/auth";
import { signIn } from "@/utils/supabase/libs";

const LoginForm = ({ setCurrentScreen }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setError(null);
    setIsLoading(true);

    const { data, error } = await signIn(values);

    if (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await login();
      }}
    >
      <CustomInput
        placeHolder="Email or Phone"
        type="email"
        onChange={(e, email) => {
          setValues((prev) => ({ ...prev, email }));
        }}
        error={error}
        value={values.email}
        onClick={() => {
          setError(null);
        }}
      />
      <CustomInput
        placeHolder="Password"
        type="password"
        minLength={8}
        value={values.password}
        onChange={(e, password) => {
          setValues((prev) => ({ ...prev, password }));
        }}
        error={error}
        onClick={() => {
          setError(null);
        }}
      />
      {/* <small className={styles.forgot}>Forgot Password</small> */}
      <CustomButton
        wFull
        type="submit"
        btnText="Sign in"
        // onClick={() => {
        //   setCurrentScreen("update");
        // }}
        isLoading={isLoading}
      />
      <small
        style={{
          color: "red",
        }}
      >
        {error}
      </small>
    </form>
  );
};

const LoginScreen = ({ setCurrentScreen }) => {
  return (
    <MainFrame>
      <div className={styles.LoginScreen}>
        <div className={styles.box}>
          <h3>Sign In</h3>
          <LoginForm setCurrentScreen={setCurrentScreen} />
        </div>
      </div>
    </MainFrame>
  );
};

export default LoginScreen;
