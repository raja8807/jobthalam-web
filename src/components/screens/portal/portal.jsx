import React, { useEffect, useState } from "react";
import LoginScreen from "./login/login";
import SignupScreen from "./sign_up/sign_up";
import UpdateScreen from "./update/update";
import CandidateScreen from "./employee/employee";
import supabase from "@/utils/supabase/auth";
import EmployerScreen from "./employer/employer";

const PortalScreen = ({ currentUser, session, setCurrentUser }) => {
  const [currentScreen, setCurrentScreen] = useState("login");

  console.log(currentUser);

  const updateScreen = () => {
    if (currentUser && session) {
      if (currentUser.role === "Candidates") {
        if (
          currentUser?.role &&
          currentUser?.first_name &&
          currentUser?.last_name &&
          currentUser?.phone_number
        ) {
          setCurrentScreen("candidate");
        } else {
          setCurrentScreen("update");
        }
      } else if (currentUser.role === "Employers") {
        if (
          currentUser?.role &&
          currentUser?.first_name &&
          currentUser?.last_name &&
          currentUser?.phone_number
        ) {
          setCurrentScreen("employer");
        } else {
          setCurrentScreen("update");
        }
      }
    } else if (session && !currentUser) {
      setCurrentScreen("update");
    } else if (!session && !currentUser) {
      setCurrentScreen("login");
    }
  };

  useEffect(() => {
    updateScreen();
  }, [session, currentUser]);

  return (
    <div>
      {currentScreen === "login" && (
        <LoginScreen setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === "signup" && (
        <SignupScreen setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === "update" && (
        <UpdateScreen
          setCurrentScreen={setCurrentScreen}
          currentUser={currentUser}
          sessionUser={session?.user}
          setCurrentUser={setCurrentUser}
        />
      )}
      {currentScreen === "candidate" && (
        <CandidateScreen
          setCurrentScreen={setCurrentScreen}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {currentScreen === "employer" && (
        <EmployerScreen
          setCurrentScreen={setCurrentScreen}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
};

export default PortalScreen;
