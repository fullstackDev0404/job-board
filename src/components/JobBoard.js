// src/components/JobBoard.js
import React from 'react';
import JobCard from './JobCard';

const JobBoard = ({ jobs, loading, error, totalJobs }) => {
  const visibleCount = jobs.length;
  const location = 'Remote-friendly • Global';

  return (
    <section className="relative">
      <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Rudratek • Talent Network
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-sky-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            Dynamic Job Board
          </h1>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            Explore live openings across Engineering, Product, Design, and Data. Filters update instantly
            so you can focus on what truly fits you.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 border border-sky-400/30 px-4 py-1 shadow-[0_0_25px_rgba(56,189,248,0.45)]">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-100">
              {visibleCount} roles visible
              {totalJobs ? ` · ${totalJobs} total` : ''}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-200">
            <span className="inline-flex h-2 w-2 rounded-full bg-sky-400" />
            <span>{location}</span>
          </div>
        </div>
      </header>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4" aria-label="Loading job cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_14px_40px_rgba(15,23,42,0.85)] animate-pulse"
            >
              <div className="px-5 pt-5 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-700/60" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-3/4 rounded bg-slate-700/60" />
                    <div className="h-3 w-1/2 rounded bg-slate-800/70" />
                  </div>
                </div>
                <div className="h-3 w-2/3 rounded bg-slate-800/70" />
                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-16 rounded-full bg-slate-800/70" />
                  <div className="h-6 w-20 rounded-full bg-slate-800/70" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="mt-6 rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-sm text-rose-100">
          {error}
        </div>
      )}

      {!loading && !error && jobs.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-600/60 bg-slate-900/60 px-6 py-10 text-center">
          <p className="text-base font-medium text-slate-100">No roles match your current filters.</p>
          <p className="mt-2 text-sm text-slate-400">
            Try resetting one of the filters or exploring a different department or engagement type.
          </p>
        </div>
      )}

      {!loading && !error && jobs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobBoard;