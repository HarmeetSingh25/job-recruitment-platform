import { useNavigate } from "react-router-dom";
const JobTableRow = ({ job }) => {
  const navigate = useNavigate();
  console.log(job);
  
  return (
    
    <tr
  onClick={() => navigate(`/jobs/${job._id}`)}
  className="cursor-pointer hover:bg-gray-100"
>
      <td className="px-4 py-4">{job?.title}</td>
      <td className="px-4 py-4">{job?.company}</td>
      <td className="px-4 py-4">{job?.location}</td>
      <td className="px-4 py-4">{job?.employmentType}</td>
      <td className="px-4 py-4">{job?.datePosted}</td>
    </tr>
  );
};

export default JobTableRow;