export function SiteFooter() {
  return (
    <footer className="border-t border-ink-900/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-ink-700/70 sm:flex-row">
        <p>© {new Date().getFullYear()} Rafa UGC Creator. Todos os direitos reservados.</p>
        <a href="/admin/login" className="hover:text-brand-600">
          Área administrativa
        </a>
      </div>
    </footer>
  );
}
