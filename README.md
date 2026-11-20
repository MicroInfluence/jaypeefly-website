# JAYPEEFLY — Official Personal Fitness & Lifestyle Coaching Website

Production-ready website for **JAYPEEFLY** (Patrick Jeremy — Fitness & Lifestyle Modification Expert), built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS v4**, **Zod**, and optional **Supabase** backend persistence.

---

## Pages Implemented

- `/` — Home (Hero, Brand Introduction, Four Distinct Pillars, Coaching Preview, Transformation Preview, Video & Social Showcase, Testimonials, Final CTA)
- `/about` — About Patrick Jeremy (Introduction, Dual Identity, 5 Philosophy Chapters, Editable Bio & Credential Gate)
- `/coaching` — Coaching Programmes (Online Coaching & In-Person Coaching, Consultation Process, FAQs)
- `/transformations` — Filterable Transformation Gallery (`All`, `Fat Loss`, `Body Transformation`, `Lifestyle Changes`, `Fitness Progress`)
- `/resources` — Filterable Educational Hub (Guides, YouTube Embeds / Channel Link, TikTok & Instagram Short-Form Hub)
- `/contact` — Start Your Journey (Configurable WhatsApp Enquiry + Validated 11-Field Coaching Application Form)

---

## Local Development

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
npx.cmd tsc --noEmit
npm.cmd run lint
npm.cmd run build
```

---

## Content & Photography Replacement Guide

All brand copy, media paths, programmes, and resources are centralized in `src/content/` so updates never require editing layout components.

### 1. Replace Patrick Jeremy's Photographs (`src/content/media.ts`)
Place Patrick's authentic photographs inside `public/images/patrick/` matching these filenames (or update the paths in `src/content/media.ts`):

- `public/images/patrick/patrick-hero-portrait.jpg` (aspect `4/5` — Professional Portrait)
- `public/images/patrick/patrick-lifestyle-editorial.jpg` (aspect `16/10` — Lifestyle Photograph)
- `public/images/patrick/patrick-about-portrait.jpg` (aspect `3/4` — Professional Portrait)
- `public/images/patrick/patrick-workout-training.jpg` (aspect `4/3` — Workout & Training)
- `public/images/patrick/patrick-online-coaching.jpg` (aspect `16/10` — Coaching Photograph)
- `public/images/patrick/patrick-in-person-coaching.jpg` (aspect `16/10` — Coaching Photograph)
- `public/images/patrick/patrick-behind-the-scenes.jpg` (aspect `4/3` — Behind-the-Scenes)

After placing each photo, set `isUploaded: true` for that slot in `src/content/media.ts`.

### 2. Update Biography & Confirm Credentials (`src/content/about.ts`)
- Fill in optional personal story/experience/location fields in `editableProfileDetails`.
- Set `confirmed: true` on the `nasm-cpt` credential only once Patrick confirms publishing it publicly.

### 3. Update Coaching Programmes (`src/content/coaching.ts`)
- Update `duration` or `pricing` (replacing `null` with confirmed strings). When `pricing` is `null`, the website displays **Enquire for Pricing**.

### 4. Add Verified Transformations & Testimonials
- `src/content/transformations.ts` — Add real client-approved entries and place before/after images under `public/images/transformations/`.
- `src/content/testimonials.ts` — Add verified client quotes with `permissionConfirmed: true`.

### 5. Add Featured YouTube Videos & Guides
- `src/content/resources.ts` — Add real YouTube video IDs and exact titles to `youtubeVideos`, or add/edit educational guides in `educationalGuides`.

---

## WhatsApp & Supabase Setup

Copy `.env.example` to `.env.local`:

1. **Site URL:**
   `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

2. **WhatsApp Integration:**
   Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in digits-only international format (no `+` or spaces, e.g., `2348000000000`).
   Until configured, the Contact page transparently displays a pending-configuration notice and lets visitors copy the prefilled message or apply via the form.

3. **Supabase Coaching Application Backend:**
   - Run `supabase/schema.sql` in your Supabase SQL Editor to create `public.coaching_applications` with Row Level Security enabled.
   - Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` (and in Vercel Project Settings -> Environment Variables).
   - **Never** prefix `SUPABASE_SERVICE_ROLE_KEY` with `NEXT_PUBLIC_`.
   - If Supabase environment variables are absent, `POST /api/coaching-application` returns HTTP `503` and the form reports the unconfigured backend honestly rather than showing a false confirmation.

---

## Deploying to Vercel

1. Push the project to GitHub/GitLab/Bitbucket.
2. Import the repository into [Vercel](https://vercel.com).
3. Add `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `SUPABASE_URL`, and `SUPABASE_SERVICE_ROLE_KEY` in Vercel Environment Variables.
4. Deploy. `sitemap.xml` and `robots.txt` are generated automatically from `NEXT_PUBLIC_SITE_URL`.
