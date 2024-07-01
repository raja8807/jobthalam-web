import JobTable from "@/components/jobs/job_table/job_table";
import CustomInput from "@/components/ui/cuatom_input/cuatom_input";
import supabase from "@/utils/supabase/auth";
import React, { useState } from "react";

const AssignJobs = ({
  allJobs = [],
  currentCandidate,
  setFeaturedJobs,
  featuredJobs,
}) => {
  const [hasApply, setHasApply] = useState(true);

  const featureJob = async (job) => {
    const newFeaturedJob = {
      job_id: job.id,
      employer_id: job.employer_id,
      candidate_id: currentCandidate?.id,
      status: "New",
    };

    const { data, error } = await supabase
      .from("Featured_Jobs")
      .insert(newFeaturedJob).select(`*,
        job:Jobs(*,
        company:Companies(*)
        )
        `);

    if (data[0]) {
      //   console.log(data);
      setFeaturedJobs((prev) => [data[0]?.job, ...prev]);
      setHasApply(false);
    }
  };

  return (
    <div>
      <CustomInput placeHolder="Search" type="search" />
      <br />
      <JobTable
        jobs={allJobs.filter((job) => {
          return !featuredJobs.some((fj) => fj.id === job.id);
        })}
        actionBtnText={hasApply && "Assign"}
        onActionClick={async (job) => {
          await featureJob(job);
        }}
        title="All Jobs"
      />
    </div>
  );
};

export default AssignJobs;
