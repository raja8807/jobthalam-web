import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useState } from "react";
import styles from "./sign_up.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";

const SignUpForm = ({ setCurrentScreen }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <CustomInput placeHolder="Email" type="email" required />
      <CustomInput
        placeHolder="Password"
        type="password"
        // required
        minLength={8}
      />
      <CustomInput
        placeHolder="Confirm password"
        type="password"
        // required
        minLength={8}
      />
      <CustomButton
        wFull
        type="submit"
        btnText="Create Account"
        onClick={() => {
          setCurrentScreen("login");
        }}
      />
    </form>
  );
};

const SignupScreen = ({ setCurrentScreen }) => {
  const [error, setError] = useState(false);
  //   const [isLogin, setIsLogin] = useState(true);

  return (
    <MainFrame>
      <div className={styles.LoginScreen}>
        <div className={styles.box}>
          <h3>Create account.</h3>
          <small className={styles.create}>
            Already have account? &nbsp;
            <span
              onClick={() => {
                setCurrentScreen("login");
                // setIsLogin(false);
              }}
            >
              Login
            </span>
          </small>
          <SignUpForm setCurrentScreen={setCurrentScreen} />
        </div>
      </div>
    </MainFrame>
  );
};

export default SignupScreen;
