import React, { useEffect, useState } from "react";
import styles from "./employer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import LeftMenu from "@/components/left_menu/left_menu";
import { Briefcase, Gear, Layers, PlusSquare } from "react-bootstrap-icons";
import OverviewTab from "./items/overview/overview";
import MyJobs from "./items/my_jobs/my_jobs";
import Settings from "./items/settings/settings";
import PostJobMenu from "./items/post_job/post_job";

const EmployerScreen = ({ currentUser, setCurrentUser, supabase }) => {
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
          supabase={supabase}
        />
      ),
    },
    {
      id: "post",
      title: "Post Job",
      icon: <PlusSquare />,
      component: <PostJobMenu currentUser={currentUser} supabase={supabase} />,
    },
    {
      id: "jobs",
      title: "My Jobs",
      icon: <Briefcase />,
      component: <MyJobs currentUser={currentUser} supabase={supabase} />,
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
          supabase={supabase}
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
