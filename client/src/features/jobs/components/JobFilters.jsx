const JobFilters = ({
  filters,
  setFilters,
}) => {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid gap-4 md:grid-cols-4">

      <select
        name="department"
        value={filters.department}
        onChange={handleChange}
        className="rounded border p-2"
      >
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Data">Data</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select>

      <select
        name="remoteFlag"
        value={filters.remoteFlag}
        onChange={handleChange}
        className="rounded border p-2"
      >
        <option value="">All</option>
        <option value="Remote">Remote</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Onsite">Onsite</option>
      </select>

      <select
        name="employmentType"
        value={filters.employmentType}
        onChange={handleChange}
        className="rounded border p-2"
      >
        <option value="">Employment Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Contract">Contract</option>
        <option value="Internship">Internship</option>
      </select>

      <select
        name="experienceLevel"
        value={filters.experienceLevel}
        onChange={handleChange}
        className="rounded border p-2"
      >
        <option value="">Experience</option>
        <option value="Entry level">Entry level</option>
        <option value="Junior">Junior</option>
        <option value="Mid-Senior level">Mid-Senior level</option>
        <option value="Senior">Senior</option>
      </select>

    </div>
  );
};

export default JobFilters;