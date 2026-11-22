-- JAYPEEFLY Coaching Applications Schema (Supabase / PostgreSQL)
-- Run this SQL in your Supabase SQL Editor before enabling form submissions.

create extension if not exists pgcrypto;

create table if not exists public.coaching_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  location text not null,
  preferred_format text not null check (preferred_format in ('Online', 'In-Person', 'Not Sure')),
  primary_goal text not null,
  current_challenges text not null,
  privacy_consent boolean not null default false check (privacy_consent = true),
  status text not null default 'new' check (status in ('new', 'reviewed', 'contacted', 'archived'))
);

comment on table public.coaching_applications is
  'Coaching enquiries submitted through the JAYPEEFLY website (/about#contact).';

alter table public.coaching_applications enable row level security;

create index if not exists idx_coaching_applications_created_at
  on public.coaching_applications (created_at desc);

create index if not exists idx_coaching_applications_status
  on public.coaching_applications (status);
