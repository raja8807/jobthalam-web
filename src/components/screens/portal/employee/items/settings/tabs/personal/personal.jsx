import FileDrop from "@/components/file_drop/file_drop";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../../../styles/form_styles.module.scss";
import styles from "./personal.module.scss";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import ControlLabel from "@/components/ui/contol_label/control_label";
import CustomSkillSelector from "@/components/ui/select/custom_skills_selector/custom_skills_selector";
import Resumes from "./resume/resumes";
import CustomButton from "@/components/ui/custom_button/custom_button";
// import supabase from "@/utils/supabase/auth";
import { EDUCATIONS, EXPERIENCES } from "@/constants/job";
import { createClient } from "@/utils/supabase/auth";

const PersonalTab = ({ currentUser, setCurrentUser, resumes, supabase }) => {
  const [values, setValues] = useState({ ...currentUser });
  const updateValues = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const updateCurrentUser = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from(currentUser.role)
      .update({ ...values })
      .eq("id", values.id)
      .select();

    if (error) {
      console.log("user update error--->", error);
    }

    if (data?.[0]) {
      setCurrentUser(values);
    }

    setIsLoading(false);
  };

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await updateCurrentUser();
        }}
      >
        <div className={styles.personal}>
          <h5>Personal Information</h5>

          <Row>
            <Col xs={12} md={12} lg={4}>
              <div className={formStyles.control}>
                <div className={styles.drop}>
                  <FileDrop label="Profile Picture" />
                </div>
              </div>
            </Col>
            <Col>
              <Row>
                <Col sm={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomInput
                      label="First Name"
                      required
                      value={values?.first_name}
                      onChange={(e, v) => {
                        updateValues("first_name", v);
                      }}
                    />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomInput
                      required
                      label="Last Name"
                      value={values?.last_name}
                      onChange={(e, v) => {
                        updateValues("last_name", v);
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomInput
                      required
                      type="date"
                      label="Date of Birth"
                      onChange={(e, v) => {
                        updateValues("dob", v);
                      }}
                      value={values?.dob}
                    />
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomSelect
                      required
                      label="Gender"
                      options={["Male", "Female"]}
                      onChange={(e, v) => {
                        updateValues("gender", v);
                      }}
                      value={values.gender}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomSelect
                      label="Highest Education"
                      options={EDUCATIONS}
                      onChange={(e, v) => {
                        updateValues("education", v);
                      }}
                      value={values.education}
                    />
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomSelect
                      value={values.experience}
                      label={"Experience"}
                      options={EXPERIENCES}
                      onChange={(e, v) => {
                        updateValues("experience", v);
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={12}>
              <div className={formStyles.control}>
                <ControlLabel label="Skills" />
                <p
                  style={{
                    marginBottom: "6px",
                  }}
                />

                <CustomSkillSelector />
              </div>
            </Col>
          </Row>

          <br />

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
        </div>
        <br />
        <h5>Resumes</h5>
        <Resumes resumes={resumes} />
        <br />
        <br />
        <CustomButton isLoading={isLoading}>Save Changes</CustomButton>
      </form>
    </>
  );
};

export default PersonalTab;
