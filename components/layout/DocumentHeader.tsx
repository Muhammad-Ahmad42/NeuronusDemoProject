import Image from "next/image";
import Logo from "@/components/ui/Logo";
import { colEdge } from "@/lib/layout";
import type { DocumentMeta } from "@/lib/types";

export default function DocumentHeader({ meta }: { meta: DocumentMeta }) {
  return (
    <header className="avoid-break relative overflow-hidden bg-navy-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(115%_135%_at_88%_18%,rgba(70,100,190,0.18),rgba(70,100,190,0.05)_40%,transparent_62%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-3/4">
        <Image
          src="/assets/neural-bright.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(max-width: 768px) 75vw, 620px"
          className="object-cover object-[100%_22%] opacity-40 "
        />
      </div>
      <div
        className={`${colEdge} relative flex items-start justify-between gap-4 pb-12 pt-6 bg-navy-800/60`}
      >
        <Logo brand={meta.brand} tone="light" withSubtitle />

        <dl className="shrink-0 whitespace-nowrap text-right text-[11px] leading-relaxed text-white/90 sm:text-[12.5px]">
          <div className="flex justify-end gap-1.5">
            <dt>Generated:</dt>
            <dd>{meta.generatedAt}</dd>
          </div>
          <div className="mt-1 flex justify-end gap-1.5">
            <dt>Document:</dt>
            <dd>{meta.classification}</dd>
          </div>
        </dl>
      </div>

      <svg
        className="absolute inset-x-0 bottom-[-1px] h-[52px] w-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#ffffff" d="M0 90 Q 500 -70 1000 90 L1000 100 L0 100 Z" />
      </svg>
    </header>
  );
}