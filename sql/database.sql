
create extension if not exists "pgcrypto";

create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  phone text,
  role text default 'client',
  created_at timestamp default now()
);

create table tickets (
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

create table ticket_photos (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid references tickets(id),
  image_url text,
  created_at timestamp default now()
);
