import MainFrame from "@/components/ui/main_frame/main_frame";
import supabase from "@/utils/supabase/auth";
import React, { useEffect, useState } from "react";
import styles from "./candidates_and_jobs.module.scss";
import { Col, Row } from "react-bootstrap";
import CandidatesList from "./candidates_list/candidates_list";
import CandidateJobs from "./cadicate_jobs/cadicate_jobs";

const CandidatesAndJobsMenu = () => {
  const [candidates, setCandidates] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  const fetchCandidatesAndJobs = async () => {
    const { data, error } = await supabase.from("Candidates").select();

    setCandidates(data || []);

    if (error) {
      console.log("Candidtes error--->", error);
    }

    const { data: jobs, error: jobsError } = await supabase.from("Jobs")
      .select(`
        *,
        company:Companies(*)`);

    if (jobs) {
      setAllJobs(jobs);
    }

    if (jobsError) {
      console.log("Jobs Error--->", jobsError);
    }
  };

  const [currentCandidate, setCurrentCandidate] = useState(null);

  useEffect(() => {
    fetchCandidatesAndJobs();
  }, []);

  return (
    <MainFrame head="Candidates and Jobs">
      <div className={styles.CandidatesAndJobsMenu}>
        <Row>
          <Col xs={12} lg={3}>
            <CandidatesList
              candidates={candidates}
              currentCandidate={currentCandidate}
              setCurrentCandidate={setCurrentCandidate}
            />
          </Col>
          <Col xs={12} lg={9}>
            <div className={styles.container}>
              {currentCandidate && (
                <CandidateJobs
                  currentCandidate={currentCandidate}
                  allJobs={allJobs}
                  //   key={currentCandidate?.id}
                />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </MainFrame>
  );
};

export default CandidatesAndJobsMenu;
