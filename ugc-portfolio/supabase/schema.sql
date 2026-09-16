-- Schema do painel UGC Creator.
-- Rode este arquivo inteiro no SQL Editor do seu projeto Supabase
-- (Supabase Dashboard > SQL Editor > New query > colar e Run).

create extension if not exists "pgcrypto";

do $$ begin
  create type deal_stage as enum (
    'contato',
    'conversando',
    'proposta',
    'fechado',
    'entregue'
  );
exception
  when duplicate_object then null;
end $$;

-- Funil de marcas (kanban), propostas e entregas vêm da mesma tabela.
create table if not exists deals (
  id uuid primary key default gen_random_uuid(),
  brand_name text not null,
  contact_info text,
  value numeric(10, 2) default 0,
  deadline date,
  stage deal_stage not null default 'contato',
  proposal_sent_at date,
  delivery_date date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Envios do formulário de contato/orçamento do site público.
create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  brand text,
  email text not null,
  whatsapp text,
  budget_range text,
  message text,
  created_at timestamptz not null default now()
);

-- Eventos para o painel de cliques (formulário aberto / enviado).
create table if not exists contact_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null check (event_type in ('form_opened', 'form_submitted')),
  created_at timestamptz not null default now()
);

alter table deals enable row level security;
alter table contact_submissions enable row level security;
alter table contact_events enable row level security;

-- Apenas usuários autenticados (você, logada no painel) podem ver/editar o funil.
drop policy if exists "Authenticated manage deals" on deals;
create policy "Authenticated manage deals" on deals
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Qualquer visitante pode enviar o formulário de contato...
drop policy if exists "Anyone can submit contact form" on contact_submissions;
create policy "Anyone can submit contact form" on contact_submissions
  for insert
  with check (true);

-- ...mas só você (autenticada) pode ler as mensagens recebidas.
drop policy if exists "Authenticated read submissions" on contact_submissions;
create policy "Authenticated read submissions" on contact_submissions
  for select
  using (auth.role() = 'authenticated');

-- Qualquer visitante pode gerar um evento (abriu/enviou o formulário)...
drop policy if exists "Anyone can log contact events" on contact_events;
create policy "Anyone can log contact events" on contact_events
  for insert
  with check (true);

-- ...mas só você (autenticada) pode ler as métricas.
drop policy if exists "Authenticated read events" on contact_events;
create policy "Authenticated read events" on contact_events
  for select
  using (auth.role() = 'authenticated');

-- Permite que o site (sem login) liste e carregue os vídeos do bucket
-- "videos" no Storage — sem isso, o Storage nega o acesso e o site não
-- consegue ver os vídeos que você sobe, mesmo com o bucket marcado como público.
drop policy if exists "Public read videos bucket" on storage.objects;
create policy "Public read videos bucket" on storage.objects
  for select
  using (bucket_id = 'videos');
