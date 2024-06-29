import React, { useEffect, useState } from "react";
import LoginScreen from "./login/login";
import supabase from "@/utils/supabase/auth";
import AdminPortalScreen from "./admin_portal/admin_portal";

const PortalScreen = ({ currentUser, session, setCurrentUser }) => {
  const [currentScreen, setCurrentScreen] = useState("login");

  const updateScreen = async () => {
    if (currentUser && session) {
      if (currentUser.role === "Admins") {
        setCurrentScreen("admin");
      } else {
        await supabase.auth.signOut();
      }
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

      {currentScreen === "admin" && (
        <AdminPortalScreen
          setCurrentScreen={setCurrentScreen}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
    </div>
  );
};

export default PortalScreen;
