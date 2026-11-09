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

## Expanded AI System Architect question bank

The question bank now contains **252 original questions across 26 categories**, from AI and ML foundations through RAG, agents, MCP, orchestration, context management, security, evaluations, model serving, observability, cost, multimodal systems, and governance. New question modules live in `src/data/architectQuestionsA.ts` through `architectQuestionsE.ts`; the original 32 IDs are preserved for existing progress data.

Use **Architect Path** in the sidebar for a five-stage roadmap and links to the source curricula. It is a self-guided learning path, **not a certification**. Many choices are contextual; practice hands-on system design and compare alternatives using requirements, evals, latency, and cost.

### Sources used to inform the original curriculum

These official learning resources informed topic coverage and organization; question wording and answers are original, and the app is not endorsed by the providers.

- OpenAI Academy, [Builder Community](https://academy.openai.com/en/public/clubs/builders-etkn1/resources/welcome-to-the-openai-builder-community) and [Building Agents](https://academy.openai.com/en/public/clubs/builders-etkn1/externals/building-agents-2025-08-18)
- OpenAI Developers, [Evaluation Best Practices](https://developers.openai.com/api/docs/guides/evaluation-best-practices) and [Scaling](https://developers.openai.com/learn/scaling)
- Anthropic, [AI Fluency Framework](https://www.anthropic.com/ai-fluency/overview) and [Claude Prompt Engineering](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- LangChain Academy, [LangGraph](https://academy.langchain.com/courses/intro-to-langgraph), [Deep Agents](https://academy.langchain.com/courses/foundation-introduction-to-deepagents), and [LangSmith Essentials](https://academy.langchain.com/courses/quickstart-langsmith-essentials/)

### Editing and validation

New entries include a stable ID, short answer, category, difficulty, tags, and a specific practical example. The enrichment layer supplies a short analogy, common misconception, teach-back key phrases, and a reusable workflow diagram. Quiz question types are generated deterministically when manually curated quiz metadata is not present; 20 additional architecture scenarios have hand-written options and feedback.

Run `npm run validate:bank` before committing questions; `npm run build` also runs this check. Existing localStorage progress remains keyed by the original question IDs. Review material critically before using it for production architecture decisions.

## Career-oriented AI Architect learning platform

Start at **Guided Learning** (`/learn`): eight paths and 32 scaffolded lessons with prerequisites, durations, familiar analogies, simple checkpoints, no-code activities, glossary, and a free-exploration toggle. Existing 252 questions, quizzes, daily learning, diagrams, and Nova remain available.

- **Decision Drills** (`/decisions`): six business choices with recommended approaches, trade-offs, risk, cost/latency implications, and improved design.
- **Failure Lab** (`/failures`): seven incidents with root cause and remediation.
- **Trade-off Simulator** (`/tradeoffs`): six adjustable architecture decisions and *illustrative* 0–100 impact indicators. They are not real cost or latency estimates.
- **Architecture Canvas** (`/canvas`): drag/drop and keyboard-add blocks, click-to-connect, structural warnings, saved diagrams, SVG image export and Markdown design document export. Designs remain local; no hosted share link is created.
- **System Design** (`/challenges`): seven challenge briefs with component hints, four written design sections, linked diagrams and 10-dimension rubric.
- **Build Projects** (`/projects`): six guided starter projects, checkpoints, hints, template code/pseudocode, completion evidence saved to portfolio.
- **Mentor Feedback** (`/mentor`): deterministic *keyword- and diagram-based* review with strengths, missing topics, next questions and suggestions. It is **not an LLM** and cannot certify design correctness. Submissions stay local.
- **My Portfolio** (`/portfolio`): completed paths, quiz results, projects, diagrams, decisions, reflections and an exportable Markdown learning profile. Completion is self-reported, not professional accreditation.

All new progress is persisted under `aiqb-career-v1` in browser localStorage. The existing progress keys are preserved. No back end, live inference service, credentials or cloud deployment is required. The exercises provide a guided, educational platform; real production implementations need engineering review, deployment and testing.

### Extend the platform

Data: `src/data/careerPaths.ts`, `architectExercises.ts`, `careerProjects.ts`. Progress: `src/context/CareerContext.tsx`. Feedback rubric: `src/lib/mentor.ts`. Canvas and exports: `src/pages/ArchitectCanvas.tsx`. Check UI usability and accessibility in a real browser after changes; CI runs content validation and the TypeScript/Vite production build.
