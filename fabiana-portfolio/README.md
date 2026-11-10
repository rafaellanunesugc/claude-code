# Portfólio UGC — Fabiana Pizoni

Site público de portfólio, sem painel administrativo — 100% estático, sem banco de dados.
O contato ("Solicitar proposta") abre direto o WhatsApp com uma mensagem pronta.

Todo o conteúdo hoje é placeholder (textos entre `[colchetes]`, vídeos e stats de exemplo,
nenhuma logo de marca) — é só a estrutura (o esqueleto) funcionando, pronta para a Fabiana
preencher com os dados reais dela depois, igual ao portfólio da Rafa Nunes.

## Como rodar localmente

```bash
cd fabiana-portfolio
npm install
npm run dev
```

Acesse http://localhost:3000

## Conteúdo pra preencher (tudo em `src/lib/`)

- `src/lib/i18n/translations.ts` — todos os textos do site (PT e EN). Qualquer trecho entre
  `[colchetes]` é placeholder e precisa ser trocado por conteúdo real da Fabiana.
- `src/lib/data/placeholders.ts`:
  - `BRAND_LOGOS` — começa vazio; a seção de marcas atendidas só aparece quando tiver pelo
    menos uma logo (arquivos em `public/images/logos/`).
  - `REAL_PORTFOLIO_VIDEOS` — começa vazio; enquanto vazio, o portfólio mostra vídeos de
    exemplo. Adicione aqui os vídeos reais (hospedados como "não listados" no YouTube).
  - `PORTFOLIO_PHOTOS` — começa vazio; a seção de fotos só aparece quando tiver pelo menos
    uma foto.
  - `SOCIAL_LINKS` e `WHATSAPP_NUMBER` — trocar pelos contatos reais da Fabiana.
- Fotos: `public/images/foto-capa.jpg` (Hero), `public/images/about.jpg` (Sobre mim e
  Contato), `public/images/portrait-2.jpg` (Estúdio).
- Fontes: hoje reaproveita as mesmas fontes licenciadas da Rafa (`src/fonts/`) só pra ter
  uma identidade visual funcionando — trocar pelas fontes da marca da Fabiana depois.
- Cores: `tailwind.config.ts` usa a mesma paleta da Rafa por enquanto — trocar pela paleta
  da Fabiana quando ela definir.

## Como fazer o deploy na Vercel

1. Suba este repositório (ou essa pasta, se for um monorepo) para o GitHub.
2. Em [vercel.com](https://vercel.com), clique em **Add New > Project** e importe o repositório.
3. Se o projeto estiver numa subpasta (ex: `fabiana-portfolio`), configure em
   **Root Directory** o valor `fabiana-portfolio`.
4. Clique em **Deploy** — não precisa de nenhuma variável de ambiente, o site é estático.
5. Depois do primeiro deploy, se quiser um domínio próprio, configure em **Settings > Domains**.
