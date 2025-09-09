# Job Listings (React + Redux)

A simple job listings app built with React and Redux. Users can filter job posts by role, level, tools, and languages using a chip-based filter panel.

## Tech Stack

- React (CRA)
- Redux (react-redux)
- CSS (vanilla)

## Available Scripts

- `npm start` – run the app in development mode
- `npm run build` – build for production
- `npm test` – run tests (if present)

## Project Structure

- `src/components/` – feature components (`JobList`, `JobPosition`, `FilterPanel`)
- `src/store/` – Redux store, reducers, actions, selectors
- `src/UI/` – reusable UI elements (`Badge`, `Card`, `Stack`)
- `public/` – static assets and images

## Development

1. Install dependencies: `npm install`
2. Start dev server: `npm start`
3. Open `http://localhost:3000`

## Notes

- Image assets are served from `public/`.
- Mock data lives in `src/mock/data.json`.
