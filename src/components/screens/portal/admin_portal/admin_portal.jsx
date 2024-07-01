import React, { useEffect, useState } from "react";
import styles from "./admin_portal.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import LeftMenu from "@/components/left_menu/left_menu";
import { Layers, PersonAdd } from "react-bootstrap-icons";
import AdminOverview from "./items/overview/overview";
import CandidatesAndJobsMenu from "./items/candidates_and_jobs/candidates_and_jobs";

const AdminPortalScreen = ({ currentUser, setCurrentUser }) => {
  const [currentMenuItemIndex, setCurrentMenuItemIndex] = useState(0);

  const [resumes, setResumes] = useState([]);

  const menuItems = [
    {
      id: "overview",
      title: "Overview",
      icon: <Layers />,
      component: (
        <AdminOverview
          setCurrentMenuItemIndex={setCurrentMenuItemIndex}
          currentUser={currentUser}
        />
      ),
    },
    {
      id: "jobs",
      title: "Candidates and Jobs",
      icon: <PersonAdd />,
      component: <CandidatesAndJobsMenu currentUser={currentUser} />,
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

export default AdminPortalScreen;
