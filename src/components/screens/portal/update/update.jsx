import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useState } from "react";
import styles from "./update.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { BuildingFill, PersonCircle } from "react-bootstrap-icons";
import CustomSkillSelector from "@/components/ui/select/custom_skills_selector/custom_skills_selector";

const UpdateForm = ({ setCurrentScreen, setUser }) => {
  const [isEmployee, setIsEmployee] = useState(true);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.select}>
        <p>Are you a</p>
        <div>
          <p
            onClick={() => {
              setIsEmployee(true);
            }}
            className={isEmployee ? styles.active : ""}
          >
            <PersonCircle />
            &nbsp;Candidate
          </p>
          <p
            onClick={() => {
              setIsEmployee(false);
            }}
            className={!isEmployee ? styles.active : ""}
          >
            <BuildingFill />
            &nbsp;Employer
          </p>
        </div>
      </div>
      <div className={styles.name}>
        <CustomInput placeHolder="First Name" type="text" required />
        <CustomInput placeHolder="Last Name" type="text" required />
      </div>
      <CustomInput placeHolder="Phone Number" type="text" minLength={8} />

      {isEmployee ? (
        <CustomSkillSelector />
      ) : (
        <>
          <CustomInput placeHolder="Company Name" type="text" minLength={8} />
          <CustomInput placeHolder="Industry Yype" type="text" minLength={8} />
        </>
      )}
      <CustomButton
        wFull
        type="submit"
        btnText="Update"
        onClick={() => {
          setUser({});
          setCurrentScreen("employee");
        }}
      />
    </form>
  );
};

const UpdateScreen = ({ setCurrentScreen, setUser }) => {
  const [error, setError] = useState(false);
  //   const [isLogin, setIsLogin] = useState(true);

  return (
    <MainFrame>
      <div className={styles.LoginScreen}>
        <div className={styles.box}>
          <h3>Update profile.</h3>

          <small className={styles.create}>
            Not now? &nbsp;
            <span
              onClick={() => {
                setUser(null);
                setCurrentScreen("login");

                // setIsLogin(false);
              }}
            >
              Logout
            </span>
          </small>

          <UpdateForm setCurrentScreen={setCurrentScreen} setUser={setUser} />
        </div>
      </div>
    </MainFrame>
  );
};

export default UpdateScreen;
