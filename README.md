# nextmind-inspired-app

> **Design note**: This project is *inspired by* the visual style of premium AI themes (dark, glassy cards, bold typography). It does **not** include or copy proprietary assets, code, or design from the linked WordPress theme.

## Structure (filepath — filename)

- `/app/layout.tsx` — Root layout with Navbar/Footer
- `/app/page.tsx` — Landing page
- `/app/login/page.tsx` — (1) User Login
- `/app/prompt/page.tsx` — (2) Prompt entry page
- `/app/products/page.tsx` — (3) Products list (AI Agent, MCQ Generator, RAG Chatbot)
- `/app/products/agent/page.tsx` — Product page: AI Agent (reduced opacity, “Coming soon”)
- `/app/products/mcq/page.tsx` — Product page: MCQ Generator (file upload & download)
- `/app/products/rag/page.tsx` — Product page: RAG Chatbot (ChatGPT‑like UI)
- `/app/pricing/page.tsx` — (4) Paid Services with Stripe Checkout stubs
- `/app/api/checkout/route.ts` — Server route stub for Stripe Checkout
- `/components/Navbar.tsx` — Top navigation
- `/components/Footer.tsx` — Footer
- `/app/globals.css` — Tailwind + theme tokens
- `tailwind.config.ts`, `postcss.config.js` — Tailwind setup
- `next.config.ts`, `package.json`, `tsconfig.json` — Next.js config

## Run locally

```bash
npm i
npm run dev
```

## Stripe integration

Replace the placeholder checkout links in `/app/pricing/page.tsx` with a real Checkout Session URL created by `/app/api/checkout/route.ts` (after wiring Stripe per comments).

## Notes

- MCQ page currently generates a demo CSV client‑side.
- RAG page uses a mocked response. Connect your APIs to enable retrieval and generation.
