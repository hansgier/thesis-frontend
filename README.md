# Ormoc City Infrastructure Projects – Frontend

This repository contains the frontend application for a web-based Infrastructure Project Information System developed as part of a thesis for the Ormoc City Planning and Development Office.

## Thesis Summary
This study focused on developing a web-based infrastructure project information system for Ormoc City Planning and Development Office to address the significant communication gap between residents and city administration regarding local projects. The existing methods of project information dissemination—including word-of-mouth, social media, announcement boards, and the city website—proved inefficient, resulting in limited public awareness of ongoing projects in various barangays. Additionally, the absence of a streamlined digital feedback mechanism required residents to physically visit government offices to provide input or file complaints.

The system was implemented using a three-tier software architecture pattern. The technology stack comprised React and Tailwind CSS for the frontend interface, Node.js and Express for the backend services, MySQL for database management, Sequelize as the ORM, and integrated services such as Cloudinary and Git for development and deployment.

## Project Scope (Frontend)
This app delivers the citizen- and admin-facing user interfaces, including:
- Public project listings and details by barangay
- Search, filter, and visualizations for ongoing and completed projects
- Digital feedback and complaints submission workflows
- Media management integration (images and documents via Cloudinary)
- Admin panels for project management (when authenticated)

Backend APIs, database, and deployment infrastructure are maintained in separate repositories/services.

## Tech Stack
- React 18 + Vite
- Tailwind CSS 3
- Ant Design (UI components)
- Redux Toolkit and React Redux (state management)
- Axios (HTTP)
- Cloudinary SDK and @cloudinary/react (media)
- Additional libs: dayjs/moment/date-fns, framer-motion, recharts, react-router-dom

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install Dependencies
```
npm install
```

### Environment Variables
Create a `.env` file in the project root. Vite exposes variables that begin with `VITE_` to the frontend. Typical variables for this project include:

- `VITE_API_BASE_URL` – Base URL of the backend API (e.g., https://api.example.com)
- `VITE_CLOUD_NAME` – Your Cloudinary cloud name
- `VITE_API_KEY` – Your Cloudinary API key
- `VITE_API_SECRET` – Your Cloudinary API secret (avoid exposing this client-side whenever possible; prefer unsigned uploads or server-side signatures)

Security note: Do not commit real secrets. For production, configure environment variables in your hosting platform (e.g., Vercel) and use secure upload presets/signature endpoints.

### Run in Development
```
npm run dev
```
This starts the Vite dev server. Open the printed local URL in your browser.

### Linting
```
npm run lint
```

### Build for Production
```
npm run build
```

### Preview Production Build
```
npm run preview
```

## Project Structure
- `src/` – React application source code
- `public/` – Static assets
- `tailwind.config.js` and `postcss.config.js` – Tailwind/PostCSS configuration
- `vite.config.js` – Vite configuration

## Deployment
This project is configured to work well with modern static hosting providers. A `vercel.json` is present for Vercel deployments.

Typical steps:
1. Ensure environment variables are set in the hosting dashboard (VITE_* vars).
2. Build on CI/host or locally using `npm run build`.
3. Deploy the `dist/` folder (Vercel, Netlify, or similar).

## Architecture Notes
- Follows a three-tier architecture:
  - Presentation: React + Tailwind (this repository)
  - Application/Service: Node.js + Express (separate backend)
  - Data: MySQL with Sequelize ORM (on the backend)
- Media handling via Cloudinary for efficient storage and delivery.

## Contributing
- Create feature branches from `main`.
- Keep commits scoped and descriptive.
- Run `npm run lint` and ensure the app builds before opening a PR.

## License
For academic use as part of a thesis project. If you intend to reuse or extend, please coordinate with the thesis author and Ormoc City Planning and Development Office.

## Acknowledgments
- Ormoc City Planning and Development Office for domain expertise and project guidance.
- Open-source community for React, Vite, Tailwind, and related libraries.

## Citation
If you reference this work, please cite the thesis and include the following metadata:
- Title: Web-based Infrastructure Project Information System for Ormoc City Planning and Development Office
- Type: Undergraduate thesis
- Frontend Stack: React, Vite, Tailwind CSS, Ant Design
- Backend Stack: Node.js, Express, MySQL, Sequelize
- Media: Cloudinary
