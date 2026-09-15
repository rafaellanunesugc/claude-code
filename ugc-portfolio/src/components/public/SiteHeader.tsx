const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#trabalhar-comigo", label: "Trabalhar comigo" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#topo" className="text-lg font-bold tracking-tight text-ink-900">
          Rafa <span className="text-wine-700">Nunes</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-ink-700 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-600">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          Solicitar proposta
        </a>
      </div>
    </header>
  );
}
