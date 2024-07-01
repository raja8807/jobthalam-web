import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import formStyles from "../../../../../../styles/form_styles.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import CustomSelect from "@/components/ui/select/custom_select/custom_select";
import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import {
  EDUCATIONS,
  EXPERIENCES,
  JOB_TYPES,
  LOCATIONS,
} from "../../../../../../constants/job";


const PostJobMenu = ({ currentUser,supabase }) => {
  const [values, setValues] = useState({
    title: "",
    role: "",
    experience: "Fresher",
    education: "Any education",
    vacancies: "1",
    location: "Any location",
    type: "Full time",
    expiry_date: "",
    description: "",
    min_salary: 0,
    max_salary: 0,
    company_id: currentUser?.company?.id,
    employer_id: currentUser?.id,
    user_id: currentUser?.user_id,
  });

  const [isLoading, setIsLoading] = useState(false);

  const createJob = async () => {
    setIsLoading(true);
    const { error, data } = await supabase
      .from("Jobs")
      .insert({ ...values })
      .select();
    if (data?.[0]) {
      setValues({
        title: "",
        role: "",
        experience: "Fresher",
        education: "Any education",
        vacancies: "1",
        location: "Any location",
        type: "Full time",
        expiry_date: "",
        description: "",
        min_salary: 0,
        max_salary: 0,
        company_id: currentUser?.company?.id,
        employer_id: currentUser?.id,
        user_id: currentUser?.user_id,
      });
    }
    setIsLoading(false);
  };

  return (
    <MainFrame head="Post a new Job">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await createJob();
        }}
      >
        <Row>
          <Col xs={12}>
            <div className={formStyles.control}>
              <CustomInput
                label="Title"
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, title: v }));
                }}
                required
                value={values.title}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomSelect
                label="Experience"
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, experience: v }));
                }}
                value={values.experience}
                options={EXPERIENCES}
                required
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomSelect
                label="Education"
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, education: v }));
                }}
                value={values.education}
                options={["Any education", ...EDUCATIONS]}
                required
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomInput
                label="Vacancies"
                type="number"
                min={1}
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, vacancies: v }));
                }}
                value={values.vacancies}
                required
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomSelect
                label="Location"
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, location: v }));
                }}
                value={values.location}
                options={["Any location", ...LOCATIONS]}
                required
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomSelect
                label="Type"
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, type: v }));
                }}
                value={values.type}
                options={JOB_TYPES}
                required
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomInput
                label="Minimum salary"
                type="number"
                onChange={(e, v) => {
                  setValues((prev) => ({
                    ...prev,
                    min_salary: v,
                    max_salary: v,
                  }));
                }}
                value={values.min_salary}
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomInput
                label="Maximum salary"
                type="number"
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, max_salary: v }));
                }}
                min={values.min_salary}
                value={values.max_salary}
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className={formStyles.control}>
              <CustomInput
                label="Expiry Date"
                type="date"
                onChange={(e, v) => {
                  setValues((prev) => ({ ...prev, expiry_date: v }));
                }}
                value={values.expiry_date}
              />
            </div>
          </Col>
        </Row>

        <div className={formStyles.control}>
          <CustomTextArea
            label="Description"
            rows={5}
            onChange={(e, v) => {
              setValues((prev) => ({ ...prev, description: v }));
            }}
            required
            value={values.description}
          />
        </div>

        <br />
        <CustomButton isLoading={isLoading}>Post Job</CustomButton>
      </form>
    </MainFrame>
  );
};

export default PostJobMenu;
