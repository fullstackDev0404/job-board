// src/components/JobBoard.js
import React from 'react';
import JobCard from './JobCard';

const JobBoard = ({ jobs, loading, error, totalJobs }) => {
  const visibleCount = jobs.length;
  const location = 'Remote-friendly • Global';

  return (
    <section className="relative">
      <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black">
            Dynamic Job Board
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl">
            Explore roles across Engineering, Product, Design, and Data with instant filtering.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-black text-white border border-black px-4 py-1.5">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-medium">
              {visibleCount} roles visible
              {totalJobs ? ` · ${totalJobs} total` : ''}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-neutral-300 px-3 py-1 text-xs text-neutral-700">
            <span className="inline-flex h-2 w-2 rounded-full bg-black" />
            <span>{location}</span>
          </div>
        </div>
      </header>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-4" aria-label="Loading job cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm animate-pulse"
            >
              <div className="px-5 pt-5 pb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-200" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 w-3/4 rounded bg-neutral-200" />
                    <div className="h-3 w-1/2 rounded bg-neutral-100" />
                  </div>
                </div>
                <div className="h-3 w-2/3 rounded bg-neutral-100" />
                <div className="flex gap-2 pt-2">
                  <div className="h-6 w-16 rounded-full bg-neutral-100" />
                  <div className="h-6 w-20 rounded-full bg-neutral-100" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobBoard;