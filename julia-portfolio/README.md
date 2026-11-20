# Portfólio UGC — Júlia Ilidia

Site público de portfólio (UGC Creator / Influenciadora), sem painel administrativo e sem banco
de dados — 100% estático. O contato ("Solicitar proposta") abre direto o WhatsApp com uma
mensagem pronta.

## Como rodar localmente

```bash
cd julia-portfolio
npm install
npm run dev
```

Acesse http://localhost:3000

## Onde editar o conteúdo

- `src/lib/site.ts` — nome exibido no site e domínio.
- `src/lib/i18n/translations.ts` — todos os textos do site (PT e EN). Trechos entre
  `[colchetes]` ainda são placeholder e precisam de informação da Júlia.
- `src/lib/data/placeholders.ts`:
  - `REAL_PORTFOLIO_VIDEOS` — vídeos reais. Cole o ID do vídeo "não listado" do YouTube em
    `youtubeId`; enquanto estiver vazio, o card mostra "Vídeo em breve".
  - `BRAND_LOGOS` — começa vazio; a seção de marcas atendidas só aparece com pelo menos
    uma logo (arquivos em `public/images/logos/`).
  - `PORTFOLIO_PHOTOS` — começa vazio; a seção de fotos só aparece com pelo menos uma foto.
  - `SOCIAL_LINKS`, `SOCIAL_HANDLES` e `WHATSAPP_NUMBER` — contatos.
- Fotos (hoje são placeholders): `public/images/foto-capa.jpg` (topo),
  `public/images/about.jpg` (Sobre mim e Contato), `public/images/portrait-2.jpg` (Estúdio).
- Cores: `tailwind.config.ts` (paleta neutra provisória — trocar pela paleta da Júlia).
- Fontes: `src/app/layout.tsx` (Playfair Display + Inter, provisórias).

## Deploy na Vercel

1. Em [vercel.com](https://vercel.com), **Add New > Project** e importe o repositório.
2. Em **Root Directory**, coloque `julia-portfolio`.
3. **Deploy** — não precisa de variáveis de ambiente.
4. Domínio próprio: **Settings > Domains**.
