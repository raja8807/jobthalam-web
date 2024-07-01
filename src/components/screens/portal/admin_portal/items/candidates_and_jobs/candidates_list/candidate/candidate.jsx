import React from "react";
import styles from "./candidate.module.scss";
import { Image } from "react-bootstrap";

const Candidate = ({ data, currentCandidate, setCurrentCandidate }) => {
  const { first_name, last_name, experience, education, id } = data;

  return (
    <div
      className={`${styles.Candidate} ${
        currentCandidate?.id == id ? styles.active : ""
      }`}
      onClick={() => {
        setCurrentCandidate(data);
      }}
    >
      <div className={styles.top}>
        <div className={styles.left}>
          <Image src={"/user.jpg"} fluid />
        </div>
        <div className={styles.right}>
          <p>
            {first_name} {last_name}
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul>
          <li>Experience : {experience}</li>
          <li>{education}</li>
          <li>Remaining Request : 10</li>
        </ul>
      </div>
    </div>
  );
};

export default Candidate;
