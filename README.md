## Dynamic Job Board – Rudratek Assignment

A single-page, **dynamic job board interface** built with React and Tailwind CSS for the Rudratek Frontend Developer assignment.

The focus is on:

- **Data binding** via a mock API-style job feed
- **Instant filtering** by Department and Role Type
- **Professional, modern UI** with responsive, component-driven design

---

### Tech Stack

- **React (Create React App)**
- **Tailwind CSS**
- Plain **JavaScript** (no extra state libraries)

---

### Running the project locally

1. **Install dependencies**

```bash
npm install
```

2. **Start the development server**

```bash
npm start
```

The app will be available at `http://localhost:3000`.

---

### Project structure (relevant files)

- `src/App.js` – Top-level layout, mock job loading, filter state, and data flow.
- `src/components/JobBoard.js` – Main content area, header, stats, and job grid.
- `src/components/JobCard.js` – Individual job card UI.
- `src/components/Filters.js` – Filter panel wiring for Department and Role Type.
- `src/components/FilterSelect.js` – Reusable select component used by both filters.
- `src/styles/tailwind.css` – Tailwind base imports + light/dark base styling.
- `tailwind.config.js` – Tailwind configuration.

---

### Features mapped to the JD

- **Data Binding**
  - Jobs are loaded from a mock dataset in `App` using a simulated async call (`setTimeout`).
  - `loading` and `error` states drive skeleton cards and error messaging in `JobBoard`.

- **Filtering Interface**
  - Global filter state in `App` for:
    - Department (`Engineering`, `Design`, `Data`, `Product`)
    - Role Type (`Full-time`, `Part-time`, `Contract`)
  - Filters are rendered with a shared `FilterSelect` component and update the job list instantly.

- **Visual Excellence**
  - Light, professional **blue/sky gradient** background, with dark-mode support.
  - Glassmorphism-inspired sidebar, filter controls, and job cards.
  - Clear typographic hierarchy and micro-interactions (hover, focus, subtle shadows).

- **Responsiveness**
  - Layout is **single-column on mobile** and **two-column (filters + board)** on larger screens.
  - Job cards use a responsive grid (`1 / 2 / 3` columns at different breakpoints).
  - Typography and paddings scale for comfortable reading on both small and large viewports.

---

### Deployment

You can deploy this app to Vercel, Netlify, or Render. A typical static build flow is:

```bash
npm run build
```

Then configure your hosting provider to serve the `build` folder as a static site.

---

### Notes for reviewers

- The design aims to reflect **Rudratek’s emphasis on aesthetic quality** while keeping the codebase simple, readable, and component-driven.
- Filters, cards, and layout are structured so that:
  - Real API calls can easily replace the mock data in `App`.
  - New filters or job fields can be added with minimal changes.

