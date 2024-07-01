import React from "react";
import styles from "./overview.module.scss";
import UpdateProfileAlert from "./update_profile_alert/update_profile_alert";
import RecentlyAppliedJobs from "./recently_applied_jobs/recently_applied_jobs";
import MainFrame from "@/components/ui/main_frame/main_frame";

const OverviewTab = ({ setCurrentMenuItemIndex, currentUser }) => {
  return (
    <MainFrame
    head={`Hello, ${currentUser?.first_name} ${currentUser?.last_name}`}
      caption="Here is your latest applications"
    >
      <div className={styles.EmployeeOverview}>
        {/* {!(
          !!currentUser?.dob &&
          !!currentUser?.gender &&
          !!currentUser?.education &&
          // !!currentUser?.experience &&
          !!currentUser?.bio
        ) && (
          <UpdateProfileAlert
            setCurrentMenuItemIndex={setCurrentMenuItemIndex}
          />
        )} */}
        <RecentlyAppliedJobs />
      </div>
    </MainFrame>
  );
};

export default OverviewTab;
