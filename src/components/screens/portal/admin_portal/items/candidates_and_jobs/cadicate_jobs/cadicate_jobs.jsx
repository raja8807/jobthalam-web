import Tabs from "@/components/ui/tabs/tabs";
import React, { useEffect, useState } from "react";
import AssignJobs from "./assign_jobs/assign_jobs";
import FeaturedJobs from "./featured_jobs/featured_jobs";
import supabase from "@/utils/supabase/auth";

const CandidateJobs = ({ currentCandidate, allJobs }) => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  const getFeaturedJobs = async () => {
    setFeaturedJobs([]);
    const { data, error } = await supabase
      .from("Featured_Jobs")
      .select(
        `*, 
            job:Jobs(*,
            company:Companies(*)
            )
            `
      ).order('created_at', {ascending:false})
      .eq("candidate_id", currentCandidate.id);
    if (data) {
      setFeaturedJobs(
        data.sort(function(a,b){
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.
          return new Date(b.created_at) - new Date(a.created_at);
        }).map((fj) => {
          return fj.job;
        })
      );
    }
    if (error) {
      console.log("featured job error-->", error);
    }
  };

  const tabs = [
    {
      id: "Candidate",
      title: "Candidate Details",
    },
    {
      id: "featured",
      title: "Featured Jobs",
      component: (
        <FeaturedJobs
          currentCandidate={currentCandidate}
          key={currentCandidate?.id}
          featuredJobs={featuredJobs}
          setFeaturedJobs={setFeaturedJobs}

        />
      ),
    },
    {
      id: "applications",
      title: "Applied Jobs",
    },
    {
      id: "assign",
      title: "Assign New Jobs",
      component: (
        <AssignJobs
          allJobs={allJobs}
          currentCandidate={currentCandidate}
          setFeaturedJobs={setFeaturedJobs}
          featuredJobs={featuredJobs}
        />
      ),
    },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  useEffect(() => {
    setCurrentTab(tabs[0]);
    getFeaturedJobs();
  }, [currentCandidate?.id]);

  return (
    <div>
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab.component}
    </div>
  );
};

export default CandidateJobs;
