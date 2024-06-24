import React from "react";
import styles from "./job_table.module.scss";
import { Col, Row } from "react-bootstrap";
import JobPreviewRow from "../job_preview_row/job_preview_row";

const JobTable = ({ title, hasDateApplied, jobs = [] }) => {
  return (
    <div className={styles.JobTable}>
      <div className={styles.title}>
        <p>
          {title} <span>(10)</span>
        </p>
      </div>

      <div className={styles.tHead}>
        <Row>
          <Col md={hasDateApplied ? 5 : 8}>
            <p>Job</p>
          </Col>
          {hasDateApplied && (
            <Col md={3}>
              <p>Date Applied</p>
            </Col>
          )}
          <Col md={1}>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Status
            </p>
          </Col>
          <Col md={3}>
            <p
              style={{
                textAlign: "center",
              }}
            >
              Action
            </p>
          </Col>
        </Row>
      </div>

      {jobs.map((job) => {
        return (
          <JobPreviewRow
            key={job.id}
            hasDateApplied={hasDateApplied}
            job={job}
          />
        );
      })}
    </div>
  );
};

export default JobTable;
