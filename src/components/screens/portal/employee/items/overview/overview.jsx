import React from "react";
import styles from "./overview.module.scss";
import UpdateProfileAlert from "./update_profile_alert/update_profile_alert";
import RecentlyAppliedJobs from "./recently_applied_jobs/recently_applied_jobs";
import MainFrame from "@/components/ui/main_frame/main_frame";

const EmployeeOverview = ({setCurrentMenuItemIndex}) => {


  return (
    <MainFrame
      head="Hello, John Doe"
      caption="Here is your daily activities and job alerts"
    >
      <div className={styles.EmployeeOverview}>
        <UpdateProfileAlert setCurrentMenuItemIndex={setCurrentMenuItemIndex}/>
        <RecentlyAppliedJobs />
      </div>
    </MainFrame>
  );
};

export default EmployeeOverview;
