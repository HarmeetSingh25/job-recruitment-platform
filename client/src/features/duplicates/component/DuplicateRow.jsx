import { useDispatch } from "react-redux";
import { changeDuplicateStatus } from "../slice/duplicateSlice";

const DuplicateRow = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4 font-medium">
        {item.originalJob?.title}
      </td>

      <td className="p-4">
        {item.duplicateJob?.title}
      </td>

      <td className="p-4">
        {item.reason}
      </td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium
          ${
            item.status === "pending"
              ? "bg-yellow-100 text-yellow-700"
              : item.status === "approved"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.status}
        </span>
      </td>

     <td className="p-4">
  <div className="flex gap-3">
    <button
      className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
      onClick={() =>
        dispatch(
          changeDuplicateStatus({
            id: item._id,
            status: "approved",
          })
        )
      }
    >
      Approve
    </button>

    <button
      className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
      onClick={() =>
        dispatch(
          changeDuplicateStatus({
            id: item._id,
            status: "ignored",
          })
        )
      }
    >
      Ignore
    </button>
  </div>
</td>
    </tr>
  );
};

export default DuplicateRow;