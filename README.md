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

## Quiz mode

Open **Quiz** in the sidebar. Choose a source (all questions, category, tags, difficulty, Review later, previously incorrect, weak areas, or due reviews), optional combined filters, and a question count (5, 10, 20, or all available). Question order is randomized on every new attempt.

The bank offers multiple choice, true/false, short fill-in-the-blank, and flashcard recall. Answers receive immediate feedback and can be reviewed on the results page. Flashcard ratings and optional answer review ratings schedule **Again** for the next session, **Hard** for 1 day, **Good** for 3 days, and **Easy** for 7 days.

Results show accuracy, duration, category breakdown, explanations, and previous attempts. The dashboard shows attempt history, recent accuracy scores, and questions needing review. Quiz attempts, per-question statistics, due dates, and unfinished sessions persist in localStorage on the same browser/device.

To extend quiz content, edit `src/data/quizMetadata.ts` keyed by question ID. The optional quiz fields are defined in `src/types/index.ts`. A question without quiz-specific metadata is automatically displayed as a flashcard.

## Build verification

Run `npm run build` to typecheck and produce a production build. The CI workflow runs this command on pushes and pull requests.
