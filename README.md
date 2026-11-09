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

## Learning support

Each question now combines a 2–3-line `shortAnswer`, analogy, practical example, misconception, connected concepts, and optional visual sequence. Edit `src/data/learningMetadata.ts` or `src/data/scenarios.ts` to extend them.

Question detail pages include **Explain simply**, a clear analogy caveat, a real-world example, a misconception, visual diagrams, and a **Teach it back** text exercise. Teach-back feedback is an explicitly **keyword-based heuristic**, not an AI grader; paraphrases may be missed.

Mark concepts Clear, Somewhat clear, or Confusing to influence daily practice. **Daily 5-minute** offers seven prioritized concepts using due-review, confusion and quiz mistakes, followed by new concepts. The session ends with a small progress recap. Daily completions, XP, badges, and category confidence are persisted locally. Streak recovery is a one-time non-punitive recovery for the previous day. **Learning progress** tracks these signals.

Quiz setup includes a **Real-world scenarios** source with practical dilemmas, four options, and explanation-specific feedback for each choice.

## Visual Learning

Open **Visual Learning** in the sidebar to browse diagrams for all 32 concept questions. Every question detail also includes an interactive, zoomable diagram below its concise answer. Beginner and Technical views, step captions, and per-node explanations help reveal how components interact.

The shared renderer in `src/components/VisualLearningDiagram.tsx` reads structured diagrams from `src/data/visualLearning.ts`. Each question receives a `visualLearning` object at load time; add or edit a declarative diagram specification in that data module without changing the UI. Supported diagrams: architecture, sequence, flowchart, dataflow, comparison, and timeline.

Select any diagram node with a mouse, tap, Enter, or Space to inspect its role, why it exists, analogy, example, and common pitfall. Walkthrough controls provide Play, Pause, Previous, Next, Replay, and Skip. The app detects `prefers-reduced-motion`, disables automatic animation, and preserves manual step navigation and descriptions.

Node color semantics: blue (user/application), purple (model), green (data/tools), orange (external services), red (errors/security checks). A memoized SVG renderer uses lightweight vector graphics without a diagram service or network dependency.

To validate locally: `npm install && npm run build`. This is a front-end educational diagram tool, not a substitute for full engineering design documents.

## Nova — AI learning buddy

Nova is an original, lightweight SVG robot companion visible only on question detail pages. Open the small bottom-right bubble to use explanation modes (simple, analogy, practical example, technical, interview, or scenario). The explanation is derived locally from the question bank. Nova requires **no API key or backend** and never sends user input to an external service.

Use Pause/Resume, Skip, Replay, and Speed up for the word-by-word explanation. After completion, select Got it, Explain differently, Show diagram, or Quiz me. The mascot responds briefly to quiz feedback inline **after** answers are submitted; it never blocks quiz questions or covers quiz choices. On mobile, its panel opens as a bottom sheet.

Under **Settings**, disable Nova, disable animations, or opt into opening the panel automatically; preferences are saved in localStorage. With prefers-reduced-motion, Nova stays static and explanations appear immediately. The existing Teach it back experience provides keyword-based feedback.

Implementation: `src/components/nova/` contains `NovaMascot`, `NovaBubble`, `NovaPanel`, `NovaMessage`, `NovaAnimationController`, `TypewriterText`, and `NovaControls`. `src/data/novaScripts.ts` generates explanations from existing question fields; optional remote generation is not enabled.
