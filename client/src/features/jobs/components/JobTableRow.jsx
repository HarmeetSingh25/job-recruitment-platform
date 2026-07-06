const JobTableRow = ({ job }) => {
  console.log(job);
  
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-4">{job?.title}</td>
      <td className="px-4 py-4">{job?.company}</td>
      <td className="px-4 py-4">{job?.location}</td>
      <td className="px-4 py-4">{job?.employmentType}</td>
      <td className="px-4 py-4">{job?.datePosted}</td>
    </tr>
  );
};

export default JobTableRow;