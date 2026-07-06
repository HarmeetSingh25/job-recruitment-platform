const InfoCard = ({ label, value }) => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-2 font-semibold">
        {value || "N/A"}
      </p>
    </div>
  );
};

export default InfoCard;