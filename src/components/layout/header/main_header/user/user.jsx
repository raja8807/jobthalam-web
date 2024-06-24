import React from "react";
import { Bell } from "react-bootstrap-icons";
import styles from "./user.module.scss";
import HeaderProfile from "./header_profile/header_profile";

const User = ({setUser}) => {
  return (
    <div className={styles.user}>
      <div className={styles.bell}>
        <Bell />
        <div className={styles.bubble} />
      </div>
      <HeaderProfile setUser={setUser} />
    </div>
  );
};

export default User;
