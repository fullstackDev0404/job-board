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
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-xs sm:text-sm font-medium tracking-wide text-neutral-800 uppercase"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full appearance-none rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm sm:text-base text-black focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
        >
          {options.map((option) => (
            <FilterOption
              key={option.value ?? option.label}
              value={option.value}
              label={option.label}
            />
          ))}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 text-xs">
          ▾
        </span>
      </div>
    </div>
  );
};

export default FilterSelect;


