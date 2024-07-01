import React, { useEffect, useState } from "react";
import LoginScreen from "./login/login";
import SignupScreen from "./sign_up/sign_up";
import UpdateScreen from "./update/update";
import CandidateScreen from "./employee/employee";
import supabase, { createClient } from "@/utils/supabase/auth";
import EmployerScreen from "./employer/employer";
import CustomButton from "@/components/ui/custom_button/custom_button";

const PortalScreen = ({
  currentUser,
  session,
  setCurrentUser,
  setSession,
  supabase,
}) => {
  const [currentScreen, setCurrentScreen] = useState("login");

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
        <LoginScreen
          setCurrentScreen={setCurrentScreen}
          setSession={setSession}
          setCurrentUser={setCurrentUser}
          supabase={supabase}
        />
      )}
      {currentScreen === "signup" && (
        <SignupScreen setCurrentScreen={setCurrentScreen} supabase={supabase} />
      )}
      {currentScreen === "update" && (
        <UpdateScreen
          setCurrentScreen={setCurrentScreen}
          currentUser={currentUser}
          sessionUser={session?.user}
          setCurrentUser={setCurrentUser}
          supabase={supabase}
        />
      )}
      {currentScreen === "candidate" && (
        <CandidateScreen
          setCurrentScreen={setCurrentScreen}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          supabase={supabase}
        />
      )}
      {currentScreen === "employer" && (
        <EmployerScreen
          setCurrentScreen={setCurrentScreen}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          supabase={supabase}
        />
      )}
    </div>
  );
};

export default PortalScreen;
