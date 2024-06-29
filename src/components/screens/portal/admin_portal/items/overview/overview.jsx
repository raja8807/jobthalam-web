import React from "react";
import MainFrame from "@/components/ui/main_frame/main_frame";

const AdminOverview = ({ setCurrentMenuItemIndex, currentUser }) => {
  return (
    <MainFrame
      head={`Hello, ${currentUser?.first_name} ${currentUser?.last_name}`}
      caption="Here is your daily activities"
    >
      srgg
    </MainFrame>
  );
};

export default AdminOverview;
