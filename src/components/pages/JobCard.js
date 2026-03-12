// src/components/JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  const { title, department, location, roleType, description } = job;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-100/70">

      <div className="px-7 pt-7 pb-7 space-y-5 relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-teal-500 text-white text-sm font-semibold shadow-sm">
              {department?.[0] || '?'}
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900 leading-snug">
                {title}
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-slate-500">
                {department} • {roleType}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-[0.75rem] sm:text-xs font-medium uppercase tracking-wide text-teal-700">
            Open
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 text-[0.8rem] sm:text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 border border-slate-200">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <span>{location}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 border border-slate-200">
            {roleType}
          </span>
        </div>

        {description && (
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </article>
  );
};

export default JobCard;