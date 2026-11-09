# AI Concepts Question Bank

A responsive React + Vite + TypeScript learning dashboard for concise AI questions.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

## Editing questions

Edit `src/data/questions.ts` to add or update questions. Each entry has a stable ID, question, concise answer, category, difficulty, tags and optional related question IDs.

Learning progress and theme are stored in the browser's localStorage. No backend is required.
