import React, { useEffect, useState } from "react";
import styles from "./employer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import LeftMenu from "@/components/left_menu/left_menu";
import { Briefcase, Gear, Layers } from "react-bootstrap-icons";
import OverviewTab from "./items/overview/overview";
import FeaturedJobs from "./items/featured_jobs/featured_jobs";
import Settings from "./items/settings/settings";

const EmployerScreen = ({ currentUser, setCurrentUser }) => {
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);

  const [resumes, setResumes] = useState([]);

  const menuItems = [
    {
      id: "overview",
      title: "Overview",
      icon: <Layers />,
      component: (
        <OverviewTab
          setCurrentMenuItemIndex={setCurrentMenuItemIndex}
          currentUser={currentUser}
        />
      ),
    },
    {
      id: "jobs",
      title: "Featured Jobs",
      icon: <Briefcase />,
      component: <FeaturedJobs />,
    },
    {
      id: "setting",
      title: "Settings",
      icon: <Gear />,
      component: (
        <Settings
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          resumes={resumes}
        />
      ),
    },
  ];

  const currentMenuItem = menuItems[currentMenuItemIndex];

  return (
    <div className={styles.EmployeeScreen}>
      <CustomContainer>
        <div className={styles.main}>
          <LeftMenu
            menuItems={menuItems}
            currentMenuItem={currentMenuItem}
            setCurrentMenuItemIndex={setCurrentMenuItemIndex}
            head="Candidate Dashboard"
          />
          {currentMenuItem?.component && currentMenuItem?.component}
        </div>
      </CustomContainer>
    </div>
  );
};

export default EmployerScreen;
