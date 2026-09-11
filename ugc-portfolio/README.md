# Portfólio UGC — Rafa

Site público de portfólio + painel administrativo privado, no mesmo projeto Next.js.

- **Site público**: `/` — apresentação, portfólio de vídeos, prova social, como contratar e formulário de contato.
- **Painel admin**: `/admin` — login, funil de marcas (kanban), propostas, entregas e métricas de contato. Protegido por login (Supabase Auth).

Todo o conteúdo hoje é placeholder (vídeos de exemplo, "Nome da Marca", "R$ 0" etc.) — é só estrutura funcionando, pronta para você trocar pelos seus dados reais depois.

## Como rodar localmente

1. Instale as dependências:
   ```bash
   cd ugc-portfolio
   npm install
   ```

2. Crie um projeto gratuito em [supabase.com](https://supabase.com).

3. No SQL Editor do seu projeto Supabase, rode o conteúdo do arquivo `supabase/schema.sql` (cria as tabelas e as regras de segurança).

4. Crie seu usuário de login do painel: no Supabase, vá em **Authentication > Users > Add user**, cadastre seu email e uma senha. Esse é o login que você vai usar em `/admin/login` (não existe cadastro público, só esse usuário).

5. Copie `.env.example` para `.env.local` e preencha com a URL e a chave "anon public" do seu projeto (em **Project Settings > API**):
   ```bash
   cp .env.example .env.local
   ```

6. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

7. Acesse:
   - Site público: http://localhost:3000
   - Painel admin: http://localhost:3000/admin/login

## Como fazer o deploy na Vercel

1. Suba este repositório para o GitHub (se ainda não estiver lá).
2. Em [vercel.com](https://vercel.com), clique em **Add New > Project** e importe o repositório.
3. Como o projeto Next.js está na pasta `ugc-portfolio` (não na raiz do repositório), configure em **Root Directory** o valor `ugc-portfolio`.
4. Em **Environment Variables**, adicione as mesmas duas variáveis do `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Clique em **Deploy**. A Vercel detecta o Next.js automaticamente.
6. Depois do primeiro deploy, se quiser um domínio próprio, configure em **Settings > Domains**.

Pronto — o mesmo projeto serve o site público e o painel admin, cada deploy novo (a cada push no branch conectado) atualiza os dois automaticamente.

## Próximos passos sugeridos

- Trocar os vídeos de exemplo pelos seus vídeos reais em `src/lib/data/placeholders.ts`.
- Trocar a foto placeholder (círculo com "RA") por uma foto real em `src/components/public/Hero.tsx`.
- Preencher a seção de prova social com prints e depoimentos reais.
- Cadastrar as marcas reais direto pelo painel (`/admin/funil`), não precisa mexer em código para isso.
