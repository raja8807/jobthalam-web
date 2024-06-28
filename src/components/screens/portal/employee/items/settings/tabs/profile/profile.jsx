import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../../../styles/form_styles.module.scss";
import CustomSkillSelector from "@/components/ui/select/custom_skills_selector/custom_skills_selector";
import ControlLabel from "@/components/ui/contol_label/control_label";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";

const ProfileTab = ({ currentUser }) => {
  const [values, setValues] = useState({ ...currentUser });

  return (
    <div>
      <br />
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
            onChange={(e, v) => {
              setValues((prev) => ({ ...prev, education: v }));
            }}
            value={values.education}
          />
        </Col>

        <Col sm={12} md={6} lg={4}>
          <div className={formStyles.control}>
            <CustomInput
              value={values.experience}
              label={"Experience"}
              type="number"
              min={0}
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
        <CustomTextArea
          label="Biography"
          rows={12}
          onChange={(e, v) => {
            setValues((prev) => ({ ...prev, bio: v }));
          }}
          value={values.bio}
        />
      </div>
      <br />
      <CustomButton>Save Changes</CustomButton>
    </div>
  );
};

export default ProfileTab;
