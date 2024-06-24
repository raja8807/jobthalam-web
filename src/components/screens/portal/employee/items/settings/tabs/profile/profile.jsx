import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import React from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../../../styles/form_styles.module.scss";
import CustomSkillSelector from "@/components/ui/select/custom_skills_selector/custom_skills_selector";
import ControlLabel from "@/components/ui/contol_label/control_label";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";

const ProfileTab = () => {
  return (
    <div>
      <h5>Your Profile</h5>

      <br />
      <Row>
        <Col xs={12} md={6} lg={4}>
          <CustomSelect
            label="Highest Education"
            options={[
              "No formal education",
              "Primary education",
              "Secondary education or high school",
              "GED",
              "Vocational qualification",
              "Bachelor's degree",
              "Master's degree",
              "Doctorate or higher",
            ]}
          />
        </Col>

        <Col sm={12} md={6} lg={4}>
          <div className={formStyles.control}>
            <CustomSelect
              label="Experience"
              options={[1, 2, 3, 4, 5, 6, 7, 8, "9+"]}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col sm={12} lg={8}>
          <div className={formStyles.control}>
            <ControlLabel label="Skills" />
            <CustomSkillSelector />
          </div>
        </Col>
      </Row>

      <div className={formStyles.control}>
        <CustomTextArea label="Biography" rows={12} />
      </div>
      <br />
      <CustomButton>Save Changes</CustomButton>
    </div>
  );
};

export default ProfileTab;
