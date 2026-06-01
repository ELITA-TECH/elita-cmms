
create extension if not exists "pgcrypto";

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  phone text,
  role text default 'client',
  created_at timestamp default now()
);

create table if not exists tickets (
  id uuid primary key default gen_random_uuid(),
  user_email text,
  category text,
  priority text,
  status text default 'nowe',
  description text,
  address text,
  postal_code text,
  city text,
  machine_name text,
  machine_model text,
  created_at timestamp default now()
);

alter table users enable row level security;
alter table tickets enable row level security;

create policy "Enable all for anon users"
on users
for all
using (true)
with check (true);

create policy "Enable all tickets for anon users"
on tickets
for all
using (true)
with check (true);
