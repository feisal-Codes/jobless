import { fetchJobsLists } from "@/app/lib/utils/fetchData";
import JobCard from "./jobCard";

const JobListing = async ({ searchTerm }: any) => {
  console.log(searchTerm);
  let jobData: { data: [] };
  try {
    jobData = await fetchJobsLists(searchTerm);
    console.log("this is data in job listing");
    console.log(jobData);
  } catch (e) {
    throw new Error();
  }
  console.log("***********************************8");
  console.log(jobData.data[0]);
  return (
    <>
      <div className="h-full">
        <div>
          {jobData.data.map((job: any) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default JobListing;
