import PortalScreen from "@/components/screens/portal/portal";
import React from "react";

const PortalPage = ({ currentUser, session, setCurrentUser }) => {
  return (
    <PortalScreen
      currentUser={currentUser}
      session={session}
      setCurrentUser={setCurrentUser}
    />
  );
};

export default PortalPage;
