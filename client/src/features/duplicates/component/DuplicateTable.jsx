import DuplicateRow from "./DuplicateRow";

const DuplicateTable = ({ duplicates }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="text-left p-4">Original Job</th>

            <th className="text-left p-4">Duplicate Job</th>

            <th className="text-left p-4">Reason</th>

            <th className="text-left p-4">Status</th>

            <th className="text-left p-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {duplicates.map((item) => (
            <DuplicateRow
              key={item._id}
              item={item}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default DuplicateTable;