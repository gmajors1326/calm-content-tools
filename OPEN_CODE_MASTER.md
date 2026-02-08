# OPEN CODE MASTER: Calm Content Tools

This document serves as the living master guide for the Calm Content Tools project. It codifies the project vision, technical choices, design system, information architecture, and development standards to ensure a calm, consistent, production-ready product.

## Vision
- A calm, modern AI-powered tool suite for creators seeking clarity, confidence, and consistency on Instagram.
- No hustle language, no overwhelm. UI is gentle, legible, and distraction-free.
- Build for longevity with clean architecture, reusable components, and scalable server-driven AI calls.

## Tech Stack (Locked In)
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui components
- Server Actions for AI calls
- OpenAI API (JSON-structured responses only)
- Deployment on Vercel
- Optional Auth (not required for v1)
- Token/usage awareness (not enforced yet)

## Design System Summary
- Palette: soft cream / warm off-white backgrounds; gentle greens (sage/eucalyptus) as accents.
- Typography: clean humanist sans (e.g., Inter or similar), large readable text.
- Shapes: rounded corners; plenty of white space; no clutter.
- Motion: subtle transitions and fade-ins.
- Layout: max-width container, center-aligned content, one primary action per screen; mobile-first.

## Information Architecture (Pages)
- Home: Hero, explanation, grid of tool cards, and a gentle CTA to try a tool.
- Tools Index (/tools): List all tools with calm cards; each card shows name, one-sentence benefit, and a "Use this tool" button.
- Individual Tool Pages (/tools/[slug]):
  - Clear title
  - One calming intro sentence
  - Simple input form (no jargon)
  - Primary CTA
  - AI-generated output (clean, JSON-driven rendering)
  - Copy output option
  - No analytics or overwhelm

## Tools (V1)
- Hook Clarity Analyzer
- Message Positioning Builder
- Content Direction Planner
- Engagement Signal Interpreter
- Weekly Content Reflection

## AI Rules (CRITICAL)
- All AI responses MUST be valid JSON
- No emojis in outputs
- No hype language, shame, pressure, or urgency
- Tone remains calm, supportive, grounded
- Never instruct users to "optimize", "hack", or "scale"
- Assume users are doing their best

## Engineering Standards
- Each tool has its own server action and prompt file.
- Prompts are clean, versioned, and readable.
- UI components are reusable; avoid inline AI logic in components.
- Robust error handling with calming copy.
- Production-ready structure; no demo placeholders.

## Project Layout (High-Level)
- app/  (Next.js App Router)
- app/page.tsx  -> Home
- app/tools/page.tsx -> Tools index
- app/tools/[slug]/page.tsx -> Tool page
- components/  (UI building blocks)
- elements/     (design system primitives)
- lib/          (shared utilities)
- server/actions/ (tool-specific AI server actions)
- prompts/        (tool prompts and variants)
- styles/         (Tailwind and globals)
- types/          (TypeScript types)

## Data Flow (Overview)
- User input -> UI -> server action call to OpenAI -> JSON response -> UI renders output with copy option.
- All AI logic lives in server actions; components are purely presentational.

## Setup & Run (Local)
- Prereqs: Node.js, npm/yarn/pnpm installed
- Install: npm install
- Dev: npm run dev
- Build: npm run build
- Start: npm run start
- OpenAI Key: use OPENAI_API_KEY in environment or as configured per env strategy

## Deployment
- Target: Vercel
- Deploy flow: push to main branch or trigger Vercel deployment; ensure environment variable OPENAI_API_KEY is set in Vercel.

## Security & Access
- v1: Auth not required; plan to layer in auth and usage limits in future.
- Treat API keys as secrets; do not commit.

## Accessibility & Internationalization
- Semantically correct headings, labels, and ARIA attributes where applicable.
- High-contrast text options and scalable typography.

## Testing & Quality
- Basic unit tests for server actions and UI rendering.
- End-to-end tests can be added with Playwright; keep test data calm and non-blocking.

## Versioning & Changelog
- Follow semantic versioning for releases; maintain CHANGELOG.md.

## Contribution & Governance
- Open to contributors; follow standard PR review processes.
- Keep changes aligned with Calm Content Tools design principles.

## Tone Rules (Server Actions)
- Langston’s server-side responses MUST be Neutral, precise, and instructional.
- No emojis, no metaphors, no narrative flavor.
- Do not use first-person self-reference.
- Do not include user coaching language unless explicitly requested by the user.
- Think like a Senior Engineer, Systems Architect, and Technical Writer. Do not present as a chat assistant.
- Provide actionable, step-by-step guidance when applicable.
- Avoid hedging language unless uncertainty is explicit.

## Quick Start Checklist (v1)
- [ ] Home and Tools pages implemented
- [ ] Five tool pages implemented with server actions
- [ ] JSON output rendering with copy functionality
- [ ] Calm design system applied
- [ ] No analytics or dashboard features
- [ ] Deployment ready to Vercel

## JSON Output Rules (STRICT)
- When a server action returns JSON:
- JSON only
- UTF-8 ASCII-safe
- No comments
- No trailing commas
- No markdown
- No explanatory text outside fields
- Langston’s voice is expressed via:
-  - Field naming
-  - Structure
-  - Validation metadata
-  - Confidence scoring
-  - Guardrails
-  - Not via prose

### Required Top-Level JSON Fields (Recommended)
```
{
  "status": "success | partial | error",
  "persona": "langston_l_model",
  "version": "x.y.z",
  "confidence": 0.00,
  "output": {},
  "notes": [],
  "warnings": [],
  "errors": []
}
```

### Confidence Scoring
- rate reflects output reliability, not user certainty
- Range: 0.00 – 1.00
- Below 0.70 requires a warning entry

### Error Handling Behavior
- Langston must:
  - Identify failure class
  - Provide corrective action
  - Preserve partial outputs when possible
  - Never silently fail

### Non-ASCII Appendix Strategy (Internal Use)
Recommendation
Create a separate internal appendix file that preserves:
- Full personality rubric
- Psychological trait matrices
- Emoji usage rules
- Narrative framing

### Non-ASCII Appendix Filename
LANGSTON_PERSONA_APPENDIX_NONASCII.md

Rules for This File
- Never loaded in production
- Never exposed to server actions
- Used for internal alignment, prompt evolution, human reference, future fine-tuning
- Production system prompt should reference it, not include it

Example reference line:
“Extended persona traits are defined in LANGSTON_PERSONA_APPENDIX_NONASCII.md (internal only).”

### Example JSON Response Template
(Langston-Aligned Tool Output)
```
{
  "status": "success",
  "persona": "langston_l_model",
  "version": "1.0.0",
  "confidence": 0.92,
  "output": {
    "tool_name": "Story Starters",
    "intent": "Generate non-promotional storytelling prompts for Instagram",
    "results": [
      {
        "id": "ss_001",
        "prompt": "Today I’m learning that clarity often comes after repetition.",
        "category": "reflection",
        "recommended_format": "instagram_story",
        "estimated_engagement": "medium"
      }
    ]
  },
  "notes": [
    "Output optimized for calm, trust-building content.",
    "No sales language included."
  ],
  "warnings": [],
  "errors": []
}
```

### Why this works (brief, no fluff)
- Persona is structural, not theatrical
- JSON is tool-safe and composable
- Open Code can: Validate, Retry, Cache, Score, Chain outputs
- This is agent-ready, not chat-ready.

### Next optional upgrades
- JSON Schema (.schema.json) for validation
- Zod / TypeScript typings
- Self-healing retry wrapper
- Verification appendix (input → output checks)
- Failure Playbook mapping (build, runtime, logic)

If you want, say:
“Package this for OPEN_CODE_MASTER.md”

---

This master file should be kept up to date as the project evolves. If you want, I can seed the initial project skeleton based on this master plan in a follow-up patch.
