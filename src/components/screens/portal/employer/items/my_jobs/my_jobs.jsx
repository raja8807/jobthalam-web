import JobTable from "@/components/jobs/job_table/job_table";
import MainFrame from "@/components/ui/main_frame/main_frame";
import supabase from "@/utils/supabase/auth";
import React, { useEffect, useState } from "react";

const MyJobs = ({ currentUser,supabase }) => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  const fetMyJobs = async () => {
    const { data, error } = await supabase
      .from("Jobs")
      .select(
        `*,
        company:Companies(*)
        `
      )
      .eq("user_id", currentUser.user_id);

    if (data) {
      setFeaturedJobs(data);
    }

    if (error) {
      console.log("Job fetch error--->", error);
    }
  };

  useEffect(() => {
    fetMyJobs();
  }, []);

  return (
    <MainFrame>
      <JobTable
        title="My Jobs"
        jobs={featuredJobs}
        hasDateApplied
        dateColName="Date Created"
        actionBtnText="Delete"
        onActionClick={(job) => {
          console.log(job);
        }}
      />
    </MainFrame>
  );
};

export default MyJobs;
