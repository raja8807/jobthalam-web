import MainFrame from "@/components/ui/main_frame/main_frame";
import Tabs from "@/components/ui/tabs/tabs";
import React, { useState } from "react";
import { Gear, Person, PersonCircle } from "react-bootstrap-icons";
import PersonalTab from "./tabs/personal/personal";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import ProfileTab from "./tabs/profile/profile";
import AccountSettingsTab from "./tabs/account_settings/account_setting";

const Settings = ({ currentUser, setCurrentUser, resumes }) => {


  const tabs = [
    {
      title: "My Profile",
      icon: <Person />,
      component: (
        <>
          <PersonalTab
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            resumes={resumes}
          />
          {/* <ProfileTab currentUser={currentUser} /> */}
        </>
      ),
    },
    // {
    //   title: "Profile",
    //   icon: <PersonCircle />,
    //   component: <ProfileTab currentUser={currentUser}/>,
    // },
    {
      title: "Account Settings",
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
