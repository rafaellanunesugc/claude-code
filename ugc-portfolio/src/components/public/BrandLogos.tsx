"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";

// Tempo (em segundos) pra percorrer uma volta completa — mesma velocidade
// de antes, só que agora calculada em cima da largura real da fileira.
const LOOP_DURATION_S = 28;

export function BrandLogos({ t }: { t: Translations["brandLogos"] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const singleWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || BRAND_LOGOS.length === 0) return;

    singleWidthRef.current = track.scrollWidth / 2;
    const speed = singleWidthRef.current / LOOP_DURATION_S; // px por segundo
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lastTime: number | null = null;
    let frameId: number;

    function tick(time: number) {
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      if (!draggingRef.current && !reduceMotion) {
        posRef.current -= speed * dt;
      }

      const half = singleWidthRef.current;
      if (half > 0) {
        let p = posRef.current % half;
        if (p > 0) p -= half;
        posRef.current = p;
      }

      if (track) track.style.transform = `translateX(${posRef.current}px)`;
      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    lastXRef.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    const dx = event.clientX - lastXRef.current;
    lastXRef.current = event.clientX;
    posRef.current += dx;
  }

  function handlePointerUp() {
    draggingRef.current = false;
  }

  if (BRAND_LOGOS.length === 0) return null;

  return (
    <section className="bg-ink-900 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-brand-400">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-white md:text-3xl">
          {t.titleBold} <span className="font-display italic text-white/70">{t.titleItalic}</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-white/60">
          {t.subtitle}
        </p>

        <div className="mt-8 overflow-hidden">
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="flex w-max cursor-grab touch-pan-y items-center gap-5 select-none active:cursor-grabbing"
          >
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="h-32 w-32 flex-none overflow-hidden rounded-full md:h-36 md:w-36"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={144}
                  height={144}
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
