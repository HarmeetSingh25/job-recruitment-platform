const ChartCard = ({ title, children }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        {title}
      </h2>

      {children}
    </div>
  );
};

export default ChartCard;