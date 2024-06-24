import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useState } from "react";
import styles from "./login.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";

const LoginForm = ({setCurrentScreen}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <CustomInput placeHolder="Email or Phone" type="email"  />
      <CustomInput
        placeHolder="Password"
        type="password"
       
        minLength={8}
      />
      <small className={styles.forgot}>Forgot Password</small>
      <CustomButton wFull type="submit" btnText="Sign in" onClick={()=>{
        setCurrentScreen('update')
      }} />
    </form>
  );
};

const LoginScreen = ({ setCurrentScreen }) => {
  const [error, setError] = useState(false);

  return (
    <MainFrame>
      <div className={styles.LoginScreen}>
        <div className={styles.box}>
          <h3>Sign In</h3>
          <small className={styles.create}>
            Don&apos;t have account? &nbsp;{" "}
            <span
              onClick={() => {
               
                setCurrentScreen("signup");
                // setIsLogin(false);
              }}
            >
              Create Account
            </span>
          </small>
          <LoginForm setCurrentScreen={setCurrentScreen}/>
        </div>
      </div>
    </MainFrame>
  );
};

export default LoginScreen;
