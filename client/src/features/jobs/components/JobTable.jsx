import JobTableHeader from "./JobTableHeader";
import JobTableRow from "./JobTableRow";

const JobTable = ({ jobs }) => {
  return (
    <table className="w-full">
      <JobTableHeader />

      <tbody>
        {jobs.map((job) => (
          <JobTableRow key={job._id} job={job} />
        ))}
      </tbody>
    </table>
  );
};

export default JobTable;