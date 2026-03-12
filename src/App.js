// src/App.js
import React, { useState, useEffect } from 'react';
import JobBoard from './components/JobBoard';
import Filters from './components/Filters';
import './styles/tailwind.css';

const MOCK_JOBS = [
  { id: 1, title: 'Frontend Developer', department: 'Engineering', location: 'Remote', roleType: 'Full-time' },
  { id: 2, title: 'Backend Developer', department: 'Engineering', location: 'Remote', roleType: 'Part-time' },
  { id: 3, title: 'UI/UX Designer', department: 'Design', location: 'Hybrid', roleType: 'Contract' },
  { id: 4, title: 'Data Scientist', department: 'Data', location: 'Remote', roleType: 'Full-time' },
  { id: 5, title: 'DevOps Engineer', department: 'Engineering', location: 'On-site', roleType: 'Full-time' },
  { id: 6, title: 'Product Manager', department: 'Product', location: 'On-site', roleType: 'Contract' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedRoleType, setSelectedRoleType] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia) {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      if (cancelled) return;
      try {
        setJobs(MOCK_JOBS);
      } catch (e) {
        setError('Unable to load jobs. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 600);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = selectedDepartment ? job.department === selectedDepartment : true;
    const matchesRoleType = selectedRoleType ? job.roleType === selectedRoleType : true;
    return matchesDepartment && matchesRoleType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-6 lg:flex-row">
        <aside className="w-full lg:w-1/3">
          <div className="bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_18px_45px_rgba(15,23,42,0.75)] space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Interface Mastery</p>
                <h2 className="mt-1 text-lg font-semibold text-white">Dynamic Job Board</h2>
              </div>
              <button
                type="button"
                aria-label="Toggle dark mode"
                aria-pressed={darkMode}
                onClick={() => setDarkMode((prev) => !prev)}
                className="relative inline-flex items-center cursor-pointer transition-colors duration-300 rounded-full w-16 h-8 bg-slate-700/70"
              >
                <span
                  className={`absolute w-6 h-6 rounded-full bg-gradient-to-br from-amber-300 to-rose-400 shadow-md transform transition-transform duration-300 ${
                    darkMode ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <Filters
              selectedDepartment={selectedDepartment}
              setSelectedDepartment={setSelectedDepartment}
              selectedRoleType={selectedRoleType}
              setSelectedRoleType={setSelectedRoleType}
            />
          </div>
        </aside>

        <main className="w-full lg:w-2/3">
          <JobBoard
            jobs={filteredJobs}
            loading={loading}
            error={error}
            totalJobs={jobs.length}
          />
        </main>
      </div>
    </div>
  );
}

export default App;