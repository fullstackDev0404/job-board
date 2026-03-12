// src/App.js
import React, { useState, useEffect } from 'react';
import JobBoard from './components/pages/JobBoard';
import Filters from './components/pages/Filters';
import './styles/tailwind.css';

const MOCK_JOBS = [
  {
    id: 1,
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    roleType: 'Full-time',
    description:
      'Own the implementation of modern web interfaces in React, collaborate with designers on pixel-perfect UI, and ship performant, accessible experiences.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote',
    roleType: 'Part-time',
    description:
      'Design and build robust APIs, optimize database queries, and support new product features with scalable backend services.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Hybrid',
    roleType: 'Contract',
    description:
      'Craft interface flows, high-fidelity Figma designs, and interaction patterns that feel intuitive, delightful, and on-brand.',
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Data',
    location: 'Remote',
    roleType: 'Full-time',
    description:
      'Turn raw product and business data into insights, build predictive models, and partner with product teams to inform roadmap decisions.',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'On-site',
    roleType: 'Full-time',
    description:
      'Automate CI/CD pipelines, harden infrastructure, and ensure observability so product teams can ship with confidence.',
  },
  {
    id: 6,
    title: 'Product Manager',
    department: 'Product',
    location: 'On-site',
    roleType: 'Contract',
    description:
      'Define product vision, prioritize the roadmap, and work closely with engineering and design to deliver impactful releases on time.',
  },
];

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedRoleType, setSelectedRoleType] = useState('');

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
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto px-6 sm:px-10 py-12 flex flex-col gap-8 lg:flex-row">
        <aside className="w-full lg:w-1/3">
          <div className="bg-white border border-neutral-200 rounded-3xl px-6 py-7 sm:px-7 sm:py-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Dynamic Job Board
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-500">
                  Filter open roles by department and engagement type.
                </p>
              </div>
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