// src/components/Filters.js
import React from 'react';
import FilterSelect from './FilterSelect';

const departmentOptions = [
  { value: '', label: 'All departments' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Design', label: 'Design' },
  { value: 'Data', label: 'Data' },
  { value: 'Product', label: 'Product' },
];

const roleTypeOptions = [
  { value: '', label: 'All types' },
  { value: 'Full-time', label: 'Full-time' },
  { value: 'Part-time', label: 'Part-time' },
  { value: 'Contract', label: 'Contract' },
];

const Filters = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedRoleType,
  setSelectedRoleType,
}) => {
  return (
    <section aria-label="Job filters" className="space-y-5">
      <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Filters
      </h3>

      <div className="grid grid-cols-1 gap-4">
        <FilterSelect
          id="department"
          label="Department"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          options={departmentOptions}
        />

        <FilterSelect
          id="roleType"
          label="Role Type"
          value={selectedRoleType}
          onChange={(e) => setSelectedRoleType(e.target.value)}
          options={roleTypeOptions}
        />
      </div>
    </section>
  );
};

export default Filters;
