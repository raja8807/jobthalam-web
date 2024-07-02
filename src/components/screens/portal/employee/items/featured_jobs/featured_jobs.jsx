import JobTable from "@/components/jobs/job_table/job_table";
import CustomButton from "@/components/ui/custom_button/custom_button";
import MainFrame from "@/components/ui/main_frame/main_frame";
import React, { useEffect, useState } from "react";
import { createClient } from "../../../../../../../utils/supabase/client";

const FeaturedJobs = ({ currentUser }) => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  const fetchFeaturedJobs = async () => {
    const supabase = createClient()

    const { data, error } = await supabase
      .from("Featured_Jobs")
      .select(
        `*,
        job:Jobs(*,
        company:Companies(*),
        employer:Employers(*)
        )
        `
      )
      .eq("candidate_id", currentUser?.id);
    if (data) {
      setFeaturedJobs(
        data
          .sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
          })
          .map((fj) => fj.job)
      );
    }
    if (error) {
      console.log("featured_job error--->", error);
    }
  };


  useEffect(() => {
    fetchFeaturedJobs();
  }, [currentUser?.id]);

  // const featuredJobs = [
  //   {
  //     id: "1",
  //     title: "Technical Engineer",
  //     logoUrl: "/apple_logo.jpg",
  //     companyName: "Apple Inc.",
  //   },
  //   {
  //     id: "2",
  //     title: "Technical Engineer",
  //     logoUrl: "/apple_logo.jpg",
  //     companyName: "Apple Inc.",
  //   },
  //   {
  //     id: "3",
  //     title: "Technical Engineer",
  //     logoUrl: "/apple_logo.jpg",
  //     companyName: "Apple Inc.",
  //   },
  // ];

  return (
    <MainFrame>
      <JobTable
        title="Featured Jobs"
        jobs={featuredJobs}
        hasDateApplied
        dateColName="Created Date"
      />
      <br />
      <CustomButton>Request More Jobs</CustomButton>
    </MainFrame>
  );
};

export default FeaturedJobs;
