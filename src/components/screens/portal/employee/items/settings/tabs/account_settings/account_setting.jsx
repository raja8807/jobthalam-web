import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../../../styles/form_styles.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import styles from "./account_settings.module.scss";
import { Check } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const AccountSettingsTab = () => {
  const [isChangePhone, setIsChangePhone] = useState(false);

  const [isOtpSent, setIsOtpSent] = useState(false);

  return (
    <div className={styles.AccountSettingsTab}>
      <h5>Contact Info</h5>

      <br />
      <Row>
        <Col xs={12} md={6} lg={6}>
          <div className={formStyles.control}>
            <CustomInput
              label="Email"
              value="abcd@gmail.com"
              rightElement={
                <p className={`${styles.controlBtn} ${styles.success}`}>
                  Verified
                  <Check />
                </p>
              }
            />
          </div>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <div className={formStyles.control}>
            <CustomInput
              label="Phone"
              value="+91 98765413230"
              disabled={!isChangePhone}
              rightElement={
                <p
                  className={`${styles.controlBtn} ${styles.active}`}
                  onClick={() => {
                    setIsChangePhone((prev) => !prev);
                  }}
                >
                  {isChangePhone ? "Save" : "Change"}
                </p>
              }
            />
          </div>
        </Col>
      </Row>
<hr/>
      <br />
      <h5>Change Password</h5>

      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className={formStyles.control}>
            <CustomInput label="Current Password" type="password" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className={formStyles.control}>
            <CustomInput label="New Password" type="password" />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className={formStyles.control}>
            <CustomInput label="Confirm Password" type="password" />
          </div>
        </Col>
      </Row>
      <div className={formStyles.control}>
        <CustomButton>Save Changes</CustomButton>
      </div>
<hr/>

    </div>
  );
};

export default AccountSettingsTab;
