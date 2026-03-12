import React from 'react';

const FilterOption = ({ value, label }) => (
  <option value={value}>
    {label}
  </option>
);

const FilterSelect = ({
  id,
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="block text-xs sm:text-sm font-semibold tracking-[0.2em] text-slate-700 uppercase"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pr-11 text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        >
          {options.map((option) => (
            <FilterOption
              key={option.value ?? option.label}
              value={option.value}
              label={option.label}
            />
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3.5 flex items-center text-slate-400 text-sm">
          ▾
        </span>
      </div>
    </div>
  );
};

export default FilterSelect;


