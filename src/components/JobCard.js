// src/components/JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  const { title, department, location, roleType } = job;

  const badgeColor =
    department === 'Engineering'
      ? 'from-sky-400 to-cyan-300'
      : department === 'Design'
      ? 'from-rose-400 to-amber-300'
      : department === 'Data'
      ? 'from-emerald-400 to-lime-300'
      : 'from-indigo-400 to-violet-300';

  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_16px_50px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_65px_rgba(8,47,73,0.95)]">
      <div className="absolute inset-px rounded-[11px] bg-gradient-to-br from-white/12 via-white/4 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

      <div className="px-5 pt-5 pb-5 space-y-4 relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${badgeColor} text-slate-900 text-sm font-semibold shadow-[0_0_20px_rgba(56,189,248,0.6)]`}
            >
              {department?.[0] || '?'}
            </div>
            <div>
              <h2 className="text-base font-semibold text-slate-50 leading-snug">{title}</h2>
              <p className="mt-1 text-xs text-slate-300/80">
                {department} • {roleType}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center rounded-full border border-emerald-400/60 bg-emerald-500/10 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-emerald-200">
            Open
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-300/80">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-2 py-1 border border-slate-700/80">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{location}</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-2 py-1 border border-slate-700/80">
            {roleType}
          </span>
        </div>
      </div>
    </article>
  );
};

export default JobCard;