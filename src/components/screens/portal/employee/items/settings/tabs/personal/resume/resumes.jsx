import React, { useState } from "react";
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
import NewResume from "./new_resume/new_resume";

const Resume = ({ isAddNew, resume, setShowNew }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <div
        className={`${styles.resume} ${isAddNew ? styles.new : ""}`}
        onClick={() => {
          if (isAddNew) {
            setShowNew(true);
          }
        }}
      >
        <div className={styles.left}>
          <div className={styles.ico}>
            {isAddNew ? <PlusCircle /> : <FileEarmarkMedical />}
          </div>

          <div className={styles.det}>
            {isAddNew ? <p>Add Cv/Resume</p> : <p>{resume.name}</p>}
            <span>{isAddNew ? "Browse File" : `${resume.size} MB`}</span>
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

const Resumes = ({ resumes }) => {
  const [showNew, setShowNew] = useState(false);

  return (
    <>
      <NewResume show={showNew} setShow={setShowNew} />
      <Row>
        {resumes &&
          resumes.map((resume) => <Resume key={resume.id} resume={resume} />)}
        <Resume isAddNew setShowNew={setShowNew} />
      </Row>
    </>
  );
};

export default Resumes;
