// src/components/JobBoard.js
import React from 'react';
import JobCard from './JobCard';

const JobBoard = ({ jobs, loading, error, totalJobs }) => {
  const visibleCount = jobs.length;
  const location = 'Remote-friendly • Global';

  return (
    <section className="relative">
      <header className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900">
            Dynamic Job Board
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 max-w-2xl">
            Explore roles across Engineering, Product, Design, and Data with instant filtering.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-teal-600 text-teal-50 border border-teal-500/80 px-5 py-2 shadow-sm shadow-teal-100/70">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 animate-pulse" />
            <span className="text-sm sm:text-base font-medium">
              {visibleCount} roles visible
              {totalJobs ? ` · ${totalJobs} total` : ''}
            </span>
          </div>
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs sm:text-sm text-slate-600">
            <span className="inline-flex h-2 w-2 rounded-full bg-slate-900" />
            <span>{location}</span>
          </div>
        </div>
      </header>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-5" aria-label="Loading job cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-sm animate-pulse"
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
        <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-base text-rose-800">
          {error}
        </div>
      )}

      {!loading && !error && jobs.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-7 py-12 text-center">
          <p className="text-lg font-medium text-slate-800">No roles match your current filters.</p>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Try resetting one of the filters or exploring a different department or engagement type.
          </p>
        </div>
      )}

      {!loading && !error && jobs.length > 0 && (
        <div className="grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3 gap-8 mt-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobBoard;