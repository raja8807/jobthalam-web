import React from "react";
import Candidate from "./candidate/candidate";
import styles from "./candidates_list.module.scss";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";

const CandidatesList = ({
  candidates,
  currentCandidate,
  setCurrentCandidate,
}) => {
  return (
    <>
      <div className={styles.search}>
        <CustomInput placeHolder="Search" type="search" />
      </div>
      <div className={styles.CandidatesList}>
        {candidates.map((candidate) => {
          return (
            <Candidate
              key={candidate.id}
              data={candidate}
              currentCandidate={currentCandidate}
              setCurrentCandidate={setCurrentCandidate}
            />
          );
        })}
      </div>
    </>
  );
};

export default CandidatesList;
