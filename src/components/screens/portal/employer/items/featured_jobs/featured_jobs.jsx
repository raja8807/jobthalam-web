import JobTable from "@/components/jobs/job_table/job_table";
import MainFrame from "@/components/ui/main_frame/main_frame";
import React from "react";

const FeaturedJobs = () => {


  const featuredJobs = [
    {
      id: "1",
      title: "Technical Engineer",
      logoUrl: "/apple_logo.jpg",
      companyName: "Apple Inc.",
    },
    {
      id: "2",
      title: "Technical Engineer",
      logoUrl: "/apple_logo.jpg",
      companyName: "Apple Inc.",
    },
    {
      id: "3",
      title: "Technical Engineer",
      logoUrl: "/apple_logo.jpg",
      companyName: "Apple Inc.",
    },
  ];

  return (
    <MainFrame>
      <JobTable title="Featured Jobs"  jobs={featuredJobs} />
    </MainFrame>
  );
};

export default FeaturedJobs;
