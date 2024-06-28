import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useState } from "react";
import styles from "./sign_up.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { signUpNewUser } from "@/utils/supabase/libs";
import { Check, CheckCircleFill } from "react-bootstrap-icons";

const SignUpForm = ({ setCurrentScreen }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signedUpEmail, setSignedUpEmail] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async () => {
    setIsLoading(true);
    setError(null);
    const res = await signUpNewUser(values);

    console.log(res);

    if (res?.data?.user?.email) {
      setSignedUpEmail(res?.data?.user?.email);
    }

    if (res.error) {
      setError(res?.error?.message);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await signup();
      }}
    >
      {signedUpEmail ? (
        <div className={styles.success}>
          <h5>
            <CheckCircleFill /> Please verify your email
          </h5>
          <p>
            A verification email has been sent to{" "}
            <strong>{signedUpEmail} </strong>
            Please click on the link to verify your email to continue.
          </p>
        </div>
      ) : (
        <>
          <CustomInput
            placeHolder="Email"
            type="email"
            required
            onChange={(e, v) => [setValues((prev) => ({ ...prev, email: v }))]}
          />
          <CustomInput
            placeHolder="Password"
            type="password"
            // required
            minLength={8}
            value={values.password}
            onChange={(e, v) => [
              setValues((prev) => ({ ...prev, password: v })),
            ]}
          />
          <CustomInput
            placeHolder="Confirm password"
            type="password"
            // required
            minLength={8}
            value={values.confirmPassword}
            onChange={(e, v) => [
              setValues((prev) => ({ ...prev, confirmPassword: v })),
            ]}
          />
        </>
      )}
      <CustomButton
        wFull
        type="submit"
        btnText={signedUpEmail ? "Resend Email" : "Create Account"}
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

const SignupScreen = ({ setCurrentScreen }) => {
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
