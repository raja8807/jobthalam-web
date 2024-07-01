import JobTable from "@/components/jobs/job_table/job_table";
import MainFrame from "@/components/ui/main_frame/main_frame";
import supabase from "@/utils/supabase/auth";
import React, { useEffect, useState } from "react";

const FeaturedJobs = ({ currentCandidate, featuredJobs=[], setFeaturedJobs }) => {
  console.log(featuredJobs);

  return (
    <MainFrame>
      <JobTable title="Featured Jobs" jobs={featuredJobs}></JobTable>
    </MainFrame>
  );
};

export default FeaturedJobs;
