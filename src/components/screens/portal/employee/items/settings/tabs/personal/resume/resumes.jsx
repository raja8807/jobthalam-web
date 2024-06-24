import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./resumes.module.scss";
import {
  Download,
  FileEarmarkMedical,
  PlusCircle,
  ThreeDots,
  Trash,
} from "react-bootstrap-icons";
import CustomDropDown from "@/components/ui/dropdown/dropdown";

const Resume = ({ isAddNew }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <div className={`${styles.resume} ${isAddNew ? styles.new : ""}`}>
        <div className={styles.left}>
          <div className={styles.ico}>
            {isAddNew ? <PlusCircle /> : <FileEarmarkMedical />}
          </div>

          <div className={styles.det}>
            {isAddNew ? <p>Add Cv/Resume</p> : <p>Professional Resume</p>}
            <span>{isAddNew ? "Browse File" : "3.5 MB"}</span>
          </div>
        </div>

        {!isAddNew && (
          <div className={styles.dot}>
            <CustomDropDown
              button={<ThreeDots />}
              options={[
                {
                  title: "Download",
                  onclick: () => alert(),
                  icon: <Download />,
                },
                {
                  title: "Delete",
                  onclick: () => alert(),
                  variant: "red",
                  icon: <Trash />,
                },
                
              ]}
            />
          </div>
        )}
      </div>
    </Col>
  );
};

const Resumes = () => {
  return (
    <Row>
      <Resume />
      <Resume />
      <Resume />
      <Resume isAddNew/>
    </Row>
  );
};

export default Resumes;
