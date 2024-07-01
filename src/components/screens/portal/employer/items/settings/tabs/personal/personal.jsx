import FileDrop from "@/components/file_drop/file_drop";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../../../styles/form_styles.module.scss";
import styles from "./personal.module.scss";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";

const PersonalTab = ({ currentUser, setCurrentUser, supabase }) => {
  const [values, setValues] = useState({ ...currentUser });

  const [compValues, setCompValues] = useState({
    ...currentUser?.company,
  });

  const updateValues = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const updateCurrentUser = async () => {
    setIsLoading(true);

    const { data: comData, error: comError } = await supabase
      .from("Companies")
      .update({ ...compValues })
      .eq("id", compValues.id)
      .select();

    if (comError) {
      console.log("company update error--->", comError);
    }

    if (comData?.[0]) {
      const empVals = { ...values };
      delete empVals.company;
      const { data, error } = await supabase
        .from(currentUser.role)
        .update({ ...empVals })
        .eq("id", empVals.id)
        .select();

      if (error) {
        console.log("user update error--->", error);
      }

      if (data?.[0]) {
        setCurrentUser({
          ...values,
          company: { ...compValues },
        });
      }
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
            <Col xs={12} md={12} lg={3}>
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
                    <CustomSelect
                      required
                      label="Industry Type"
                      value={compValues.industry_type}
                      options={["IT", "Agricultural"]}
                      onChange={(e, v) => {
                        setCompValues((prev) => ({
                          ...prev,
                          industry_type: v,
                        }));
                      }}
                    />
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomSelect
                      required
                      label="Location"
                      value={compValues.location}
                      onChange={(e, v) => {
                        setCompValues((prev) => ({
                          ...prev,
                          location: v,
                        }));
                      }}
                      options={["Chennai", "Coimbatore"]}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <div className={formStyles.control}>
                    <CustomInput
                      required
                      label="Website url"
                      value={compValues.website}
                      onChange={(e, v) => {
                        setCompValues((prev) => ({
                          ...prev,
                          website: v,
                        }));
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <br />

          <div className={formStyles.control}>
            <CustomTextArea
              label="About Company"
              rows={12}
              value={compValues.about}
              onChange={(e, v) => {
                setCompValues((prev) => ({
                  ...prev,
                  about: v,
                }));
              }}
            />
          </div>
        </div>
      <br />

        <CustomButton isLoading={isLoading}>
        Save Changes
      </CustomButton>
      </form>

  
    </>
  );
};

export default PersonalTab;
