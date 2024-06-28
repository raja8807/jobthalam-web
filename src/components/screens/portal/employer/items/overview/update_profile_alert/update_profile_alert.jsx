import React from "react";
import styles from "./update_profile_alert.module.scss";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import supabase from "@/utils/supabase/auth";

const UpdateProfileAlert = ({ setCurrentMenuItemIndex }) => {
  return (
    <div className={styles.UpdateProfileAlert}>
      <div className={styles.left}>
        <Image src="/user.jpg" alt="user" className={styles.userImg} />
        <div>
          <h5>Your Profile is not updated</h5>
          <p>
            Complete your profile editing & verify contacts to get personalized
            jobs.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <CustomButton
          variant={3}
          onClick={() => {
            setCurrentMenuItemIndex(2);
          }}
        >
          Edit Profile
        </CustomButton>
      </div>
    </div>
  );
};

export default UpdateProfileAlert;
