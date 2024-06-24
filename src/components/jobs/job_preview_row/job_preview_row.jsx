import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./job_preview_row.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Check2, CurrencyRupee, GeoAlt } from "react-bootstrap-icons";
import JobDetails from "../job_details/job_details";

const JobPreviewRow = ({ hasDateApplied, job }) => {
  const [showDetailsFor, setShowDetailsFor] = useState(null);

  return (
    <div
      className={styles.JobPreviewRow}
      onClick={() => {
        setShowDetailsFor(job);
      }}
    >
      {showDetailsFor && (
        <JobDetails job={showDetailsFor} setJob={setShowDetailsFor} />
      )}
      <Row>
        <Col xs={12} md={hasDateApplied ? 5 : 8}>
          <div className={styles.col}>
            <div className={styles.job_details}>
              <div>
                <Image src={job.logoUrl} alt="company_logo" width={50} />
              </div>

              <div className={styles.right}>
                <div className={styles.top}>
                  <p className={styles.job_name}>{job.title}</p>
                  <p className={styles.job_type}>Remote</p>
                </div>

                <div className={styles.bottom}>
                  <p className={styles.job_location}>
                    <GeoAlt /> Chennai
                  </p>
                  <p className={styles.job_salary}>
                    <CurrencyRupee /> 25,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        {hasDateApplied && (
          <Col xs={12} md={3}>
            <div className={styles.col}>
              <div className={styles.date}>
                <span>Date Applied:&nbsp;</span>Dec 7, 2024
              </div>
            </div>
          </Col>
        )}
        <Col xs={6} md={1}>
          <div className={`${styles.col} ${styles.center}`}>
            <div className={styles.status}>
              <Check2 /> Active
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className={`${styles.col} ${styles.center} ${styles.action}`}>
            <CustomButton variant={3}>View Details</CustomButton>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default JobPreviewRow;
