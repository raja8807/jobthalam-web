import React, { useState } from "react";
import styles from "./header_profile.module.scss";
import { BriefcaseFill, Pencil, X } from "react-bootstrap-icons";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";

const HeaderProfile = ({ setUser }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.HeaderProfile}>
      <div
        className={styles.dp}
        onClick={() => {
          setShowPopup((prev) => !prev);
        }}
      >
        SS
      </div>
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.top}>
            <X
              onClick={() => {
                setShowPopup(false);
              }}
            />
            <div className={styles.dpl}>SS</div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.name}>John Doe</p>
            <small>johndoe@gmail.com</small>
            <br />
            <small>
              <BriefcaseFill /> &nbsp;Employee
            </small>
            <br />
            <br />
            <Link href="/">
              Update Profile <Pencil />
            </Link>
            <br />
            <br />
            <CustomButton
              onClick={() => {
                setUser(null);
              }}
            >
              Sign Out
            </CustomButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
