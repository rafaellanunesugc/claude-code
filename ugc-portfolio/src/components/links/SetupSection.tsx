import Image from "next/image";
import { Camera, ShoppingBag } from "lucide-react";
import type { SetupProduct } from "@/lib/data/links";
import { SETUP, SETUP_PRODUCTS } from "@/lib/data/links";

// Cor do selo de cada loja. Lojas fora da lista usam o rosê do site.
const STORE_STYLES: Record<string, string> = {
  "Mercado Livre": "bg-[#ffe600] text-[#2d3277]",
  Amazon: "bg-[#232f3e] text-[#ff9900]",
  Shopee: "bg-[#ee4d2d] text-white",
};

function ProductCard({ category, name, store, href, image }: SetupProduct) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-white">
      <div className="relative aspect-square border-b border-ink-900/10 bg-white">
        {image ? (
          <Image src={image} alt={name} fill sizes="(max-width: 448px) 50vw, 220px" className="object-contain p-4" />
        ) : (
          <div className="flex h-full items-center justify-center bg-blush-50">
            <Camera className="h-10 w-10 text-wine-300" />
          </div>
        )}
        {store && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[11px] font-extrabold uppercase ${
              STORE_STYLES[store] ?? "bg-wine-600 text-white"
            }`}
          >
            {store}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-wine-700">{category}</p>
        <p className="mt-1 flex-1 text-lg font-semibold leading-snug">{name}</p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-white transition hover:bg-brand-700"
          >
            <ShoppingBag className="h-4 w-4 flex-none" />
            {store ? `Ver na ${store}` : "Ver produto"}
          </a>
        ) : (
          <span className="mt-3 rounded-full bg-cream px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide text-ink-700/70">
            Link em breve
          </span>
        )}
      </div>
    </div>
  );
}

export function SetupSection() {
  return (
    <section className="mx-auto max-w-md px-4 pt-6">
      <div className="overflow-hidden rounded-3xl bg-blush-100">
        <div className="relative aspect-[4/3]">
          <Image src={SETUP.photo} alt="Rafa Nunes" fill sizes="448px" className="object-cover object-bottom" />
        </div>
        <div className="px-6 py-7 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-wine-700">{SETUP.eyebrow}</p>
          <h2 className="mt-2 text-4xl font-bold leading-tight text-ink-900">
            {SETUP.title}{" "}
            <span className="block font-display italic font-normal text-wine-700">{SETUP.accent}</span>
          </h2>
          <p className="mt-3 text-lg text-ink-800">{SETUP.text}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {SETUP_PRODUCTS.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

      <p className="mt-5 text-center text-sm text-ink-700/70">{SETUP.disclaimer}</p>
    </section>
  );
}
