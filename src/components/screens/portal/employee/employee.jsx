import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useEffect, useState } from "react";
import styles from "./employee.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import LeftMenu from "@/components/left_menu/left_menu";
import { Briefcase, Gear, Layers } from "react-bootstrap-icons";
import EmployeeOverview from "./items/overview/overview";
import FeaturedJobs from "./items/featured_jobs/featured_jobs";
import Settings from "./items/settings/settings";
import { createClient } from "../../../../../utils/supabase/client";

const EmployeeScreen = ({ currentUser, setCurrentUser }) => {
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);

  const [resumes, setResumes] = useState([]);

  const getResumes = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("Resumes")
      .select()
      .eq("user_id", currentUser?.user_id);

    // console.log(data, error);
    if (data) {
      setResumes(data);
    }
  };

  useEffect(() => {
    getResumes();
  }, []);

  const menuItems = [
    {
      id: "overview",
      title: "Overview",
      icon: <Layers />,
      component: (
        <EmployeeOverview
          setCurrentMenuItemIndex={setCurrentMenuItemIndex}
          currentUser={currentUser}
        />
      ),
    },
    {
      id: "jobs",
      title: "Featured Jobs",
      icon: <Briefcase />,
      component: <FeaturedJobs supabase={supabase} currentUser={currentUser} />,
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

export default EmployeeScreen;
