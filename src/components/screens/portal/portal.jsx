import React, { useEffect, useState } from "react";
import LoginScreen from "./login/login";
import SignupScreen from "./sign_up/sign_up";
import UpdateScreen from "./update/update";
import EmployeeScreen from "./employee/employee";

const PortalScreen = ({ setUser, user }) => {
  const [currentScreen, setCurrentScreen] = useState("login");

  useEffect(() => {
    if (!user) {
      setCurrentScreen("login");
    }
  }, [user]);

  return (
    <div>
      {!user && currentScreen === "login" && (
        <LoginScreen setCurrentScreen={setCurrentScreen} />
      )}
      {!user && currentScreen === "signup" && (
        <SignupScreen setCurrentScreen={setCurrentScreen} />
      )}
      {!user && currentScreen === "update" && (
        <UpdateScreen setCurrentScreen={setCurrentScreen} setUser={setUser} />
      )}
      {user && <EmployeeScreen setCurrentScreen={setCurrentScreen} />}
    </div>
  );
};

export default PortalScreen;
