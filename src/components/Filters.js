// src/components/Filters.js
import React from 'react';

const Filters = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedRoleType,
  setSelectedRoleType,
}) => {
  return (
    <section aria-label="Job filters" className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        Filters
      </h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="department"
            className="block text-xs font-medium tracking-wide text-slate-300 uppercase"
          >
            Department
          </label>
          <div className="relative">
            <select
              id="department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full appearance-none rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 pr-9 text-sm text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.85)] focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:border-sky-400/70"
            >
              <option value="">All departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Data">Data</option>
              <option value="Product">Product</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 text-xs">
              ▾
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="roleType"
            className="block text-xs font-medium tracking-wide text-slate-300 uppercase"
          >
            Role Type
          </label>
          <div className="relative">
            <select
              id="roleType"
              value={selectedRoleType}
              onChange={(e) => setSelectedRoleType(e.target.value)}
              className="w-full appearance-none rounded-xl border border-white/15 bg-slate-900/60 px-3 py-2.5 pr-9 text-sm text-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.85)] focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:border-sky-400/70"
            >
              <option value="">All types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 text-xs">
              ▾
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;