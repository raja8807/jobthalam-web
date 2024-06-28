import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../../../styles/form_styles.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import styles from "./account_settings.module.scss";
import { Check } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";

const AccountSettingsTab = ({ currentUser }) => {
  const [isChangePhone, setIsChangePhone] = useState(false);

  const [isOtpSent, setIsOtpSent] = useState(false);

  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className={styles.AccountSettingsTab}>
      <h5>Contact Info</h5>

      <br />
      <Row>
        <Col xs={12} md={6} lg={5}>
          <div className={formStyles.control}>
            <CustomInput
              label="Email"
              value={currentUser.email}
              rightElement={
                <p className={`${styles.controlBtn} ${styles.success}`}>
                  Verified
                  <Check />
                </p>
              }
              disabled
            />
          </div>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <div className={formStyles.control}>
            <CustomInput
              label="Whatsapp number"
              value={currentUser.phone_number}
              disabled={!isChangePhone}
              rightElement={
                isVerified ? (
                  <p className={`${styles.controlBtn} ${styles.success}`}>
                    Verified
                    <Check />
                  </p>
                ) : (
                  <p
                    className={`${styles.controlBtn} ${styles.active}`}
                    onClick={() => {
                      setIsOtpSent((prev) => !prev);
                    }}
                  >
                    {isChangePhone ? "Save" : isOtpSent ? "Resend" : "Verify"}
                    {/* {isChangePhone ? "Save" : "Verify"} */}
                  </p>
                )

                // !isOtpSent && (
                //   <p
                //     className={`${styles.controlBtn} ${styles.active}`}
                //     onClick={() => {
                //       setIsOtpSent((prev) => !prev);
                //     }}
                //   >
                //     {isChangePhone ? "Save" : "Verify"}
                //     {/* {isChangePhone ? "Save" : "Verify"} */}
                //   </p>
                // )
              }
            />
          </div>
        </Col>
        {isOtpSent && !isVerified && (
          <Col sm={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomInput
                label="Otp"
                // value=""
                // disabled={!isChangePhone}
                rightElement={
                  <p
                    className={`${styles.controlBtn} ${styles.active}`}
                    onClick={() => {
                      setIsVerified((prev) => !prev);
                    }}
                  >
                    Verify
                  </p>
                }
              />
            </div>
          </Col>
        )}
      </Row>
      <hr />
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
      <hr />
    </div>
  );
};

export default AccountSettingsTab;
