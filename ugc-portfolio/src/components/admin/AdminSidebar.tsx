"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOutAction } from "@/lib/actions/admin";

const NAV_ITEMS = [
  { href: "/admin/funil", label: "Funil de marcas" },
  { href: "/admin/propostas", label: "Propostas" },
  { href: "/admin/entregas", label: "Entregas" },
  { href: "/admin/metricas", label: "Métricas" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col justify-between border-r border-ink-900/10 bg-white p-5 md:w-60">
      <div>
        <p className="mb-6 text-lg font-bold text-ink-900">
          Rafa <span className="text-brand-600">UGC</span>
        </p>
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm font-medium transition",
                pathname === item.href
                  ? "bg-brand-600 text-white"
                  : "text-ink-700 hover:bg-ink-900/5"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <form action={signOutAction}>
        <button
          type="submit"
          className="w-full rounded-lg border border-ink-900/15 px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-900/5"
        >
          Sair
        </button>
      </form>
    </aside>
  );
}
