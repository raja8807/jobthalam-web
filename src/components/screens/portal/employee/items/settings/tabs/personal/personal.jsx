import FileDrop from "@/components/file_drop/file_drop";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import React from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../../../styles/form_styles.module.scss";
import styles from "./personal.module.scss";
import Resumes from "./resume/resumes";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";

const PersonalTab = () => {
  return (
    <div className={styles.personal}>
      <h5>Personal Information</h5>

      <br />

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
                <CustomInput label="First Name" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={formStyles.control}>
                <CustomInput label="Last Name" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <div className={formStyles.control}>
                <CustomInput type="date" label="Date of Birth" />
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className={formStyles.control}>
                <CustomSelect label="Gender" options={["", "Male", "Female"]} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <div className={formStyles.control}>
                <CustomSelect
                  label="Marital Status"
                  options={[
                    "",
                    "single",
                    "married",
                    "widowed",
                    "divorced",
                    "separated",
                  ]}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <br />

      <h5>Your Cv/Resume</h5>
      <Resumes />
    </div>
  );
};

export default PersonalTab;
