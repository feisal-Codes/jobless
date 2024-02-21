import Image from "next/image";
import React from "react";

const JobCard = ({ job }: any) => {
  return (
    <div
      key={job.job_id}
      className="flex bg-silver border-b-2 border-silver p-4"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="mr-4">
        <img
          src={job.employer_logo}
          height={60}
          width={60}
          alt="company logo"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-2">{job.job_title}</h3>
        <p className="text-black mb-1">{job.employer_name}</p>
        <div className="flex items-center">
          <p className="text-blue-500 text-sm">{job.job_employment_type}</p>

          <span className="mx-2 text-gray-500">|</span>

          <p className="text-gray-700 text-sm">{job.job_city}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
