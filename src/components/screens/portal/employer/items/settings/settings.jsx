import MainFrame from "@/components/ui/main_frame/main_frame";
import Tabs from "@/components/ui/tabs/tabs";
import React, { useState } from "react";
import { Gear, Person } from "react-bootstrap-icons";
import EmployerProfileTab from "./tabs/personal/personal";
import AccountSettingsTab from "./tabs/account_settings/account_setting";

const Settings = ({ currentUser, setCurrentUser, resumes }) => {
  const tabs = [
    {
      title: "Employer Profile",
      icon: <Person />,
      component: (
        <EmployerProfileTab
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          resumes={resumes}
        />
      ),
    },

    {
      title: "Contact Settings",
      icon: <Gear />,
      component: <AccountSettingsTab currentUser={currentUser} />,
    },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <MainFrame head="Setting">
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab?.component}
    </MainFrame>
  );
};

export default Settings;
