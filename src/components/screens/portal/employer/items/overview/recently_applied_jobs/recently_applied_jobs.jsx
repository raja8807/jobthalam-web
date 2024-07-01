import JobTable from "@/components/jobs/job_table/job_table";
import React from "react";

const RecentlyAppliedJobs = () => {
  const recentJobs = [
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
    <div>
      <JobTable title="Recent Applications" hasDateApplied jobs={recentJobs} />
    </div>
  );
};

export default RecentlyAppliedJobs;
