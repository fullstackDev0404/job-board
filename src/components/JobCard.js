// src/components/JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  const { title, department, location, roleType, description } = job;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">

      <div className="px-6 pt-6 pb-6 space-y-4 relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white text-xs font-semibold">
              {department?.[0] || '?'}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-black leading-snug">
                {title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600">
                {department} • {roleType}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 text-[0.7rem] sm:text-xs font-medium uppercase tracking-wide text-neutral-700">
            Open
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[0.75rem] sm:text-xs text-neutral-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 border border-neutral-200">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            <span>{location}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-1 border border-neutral-200">
            {roleType}
          </span>
        </div>

        {description && (
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-700 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default JobCard;