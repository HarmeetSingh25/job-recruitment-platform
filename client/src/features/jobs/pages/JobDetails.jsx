import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { fetchJobById } from "../slice/jobslice";
import InfoCard from "../components/InfoCard";

const JobDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { selectedJob, loading } = useSelector(
    (state) => state.jobs
  );

  useEffect(() => {
    dispatch(fetchJobById(id));
  }, [dispatch, id]);

  if (loading) return <h1>Loading...</h1>;

  if (!selectedJob) return <h1>Job Not Found</h1>;

  return (
    <div className="space-y-8">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="rounded-xl border bg-white p-8 shadow">

        <h1 className="text-3xl font-bold">
          {selectedJob.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-3">

          <span className="rounded-full bg-blue-100 px-3 py-1">
            {selectedJob.employmentType || "N/A"}
          </span>

          <span className="rounded-full bg-green-100 px-3 py-1">
            {selectedJob.remoteFlag || "N/A"}
          </span>

          <span className="rounded-full bg-yellow-100 px-3 py-1">
            {selectedJob.salary || "N/A"}
          </span>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <InfoCard
          label="Company"
          value={selectedJob.company}
        />

        <InfoCard
          label="Location"
          value={selectedJob.location}
        />

        <InfoCard
          label="Department"
          value={selectedJob.department}
        />

        <InfoCard
          label="Experience"
          value={selectedJob.experienceLevel}
        />

        <InfoCard
          label="Posted"
          value={new Date(
            selectedJob.datePosted
          ).toLocaleDateString()}
        />

        <InfoCard
          label="Apply Type"
          value={selectedJob.applyType}
        />

      </div>

      <div className="rounded-xl border bg-white p-8 shadow">

        <h2 className="mb-4 text-2xl font-bold">
          Description
        </h2>

        <p className="leading-8 whitespace-pre-wrap">
          {selectedJob.description || "No description available."}
        </p>

      </div>

    </div>
  );
};

export default JobDetails;