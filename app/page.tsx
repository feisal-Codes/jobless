import JobDetail from "./ui/components/jobDetail";
import JobListing from "./ui/components/jobListing";

const Home = ({ searchParams }: any) => {
  console.log("this is it");
  console.log(searchParams);
  const { query } = searchParams;
  return (
    <div className="flex h-screen">
      <div className="w-1/4 overflow-y-auto h-full">
        <JobListing searchTerm={query} />
      </div>
      <div className="flex-grow overflow-y-auto">
        <JobDetail />
      </div>
    </div>
  );
};

export default Home;
