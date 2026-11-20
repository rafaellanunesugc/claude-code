import Image from "next/image";
import { CREATOR_PRODUCTS, MENTORIA } from "@/lib/data/links";
import { Eyebrow, Headline, IndexRow, SolidButton, pad } from "@/components/links/editorial";

// Conteúdo de venda da mentoria (usado no link da bio e na página /mentoria).
export function MentoriaContent({ showProducts = true }: { showProducts?: boolean }) {
  return (
    <>
    <Eyebrow>{MENTORIA.tag}</Eyebrow>
    <Headline>{MENTORIA.slogan}</Headline>
    <div className="relative mt-8 aspect-square w-full overflow-hidden bg-duo/10">
      <Image src={MENTORIA.photo} alt="Rafa Nunes, mentora" fill sizes="448px" className="object-cover object-center" />
    </div>
    <p className="mt-6 text-lg leading-relaxed text-duo/80">{MENTORIA.pitch}</p>
    
    <div className="mt-8 grid grid-cols-2 border-y border-duo/20">
      {MENTORIA.proof.map((item, i) => (
        <div key={item.label} className={`py-5 ${i > 0 ? "border-l border-duo/20 pl-4" : ""}`}>
          <p className="font-name text-4xl font-extrabold">{item.value}</p>
          <p className="mt-1 text-sm text-duo/70">{item.label}</p>
        </div>
      ))}
    </div>
    
    <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
      {MENTORIA.steps.map((step, i) => (
        <div key={step.title}>
          <p className="text-sm text-duo/60">
            {pad(i + 1)} / Encontro {i + 1}
          </p>
          <h3 className="mt-3 font-name text-xl font-extrabold leading-tight">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-duo/75">{step.text}</p>
        </div>
      ))}
    </div>
    <p className="mt-8 border-l-2 border-duo pl-4 leading-relaxed text-duo/80">{MENTORIA.bonus}</p>
    
    <div className="mt-10 border border-duo/25 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-duo/70">Investimento</p>
      <p className="mt-3 font-name text-5xl font-extrabold">{MENTORIA.price}</p>
      <p className="mt-2 text-sm text-duo/70">{MENTORIA.priceNote}</p>
      <div className="mt-6">
        <SolidButton href={MENTORIA.href}>{MENTORIA.cta}</SolidButton>
      </div>
      <p className="mt-3 text-xs text-duo/60">Você fala direto comigo no WhatsApp.</p>
    </div>
    
    {showProducts && CREATOR_PRODUCTS.length > 0 && (
      <div className="mt-12">
        <Eyebrow>Em breve</Eyebrow>
        <div className="mt-4 border-t border-duo/20">
          {CREATOR_PRODUCTS.map((product, i) => (
            <IndexRow
              key={product.title}
              n={i + 1}
              title={product.title}
              description={`${product.description}. Entre na lista de espera.`}
              href={product.href}
            />
          ))}
        </div>
      </div>
    )}
    </>
  );
}
