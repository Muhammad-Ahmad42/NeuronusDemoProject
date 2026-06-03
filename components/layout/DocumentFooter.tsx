import Image from "next/image";
import { colEdge } from "@/lib/layout";
import type { DocumentMeta } from "@/lib/types";

export default function DocumentFooter({ meta }: { meta: DocumentMeta }) {
  return (
    <footer className="avoid-break relative overflow-hidden bg-navy-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_150%_at_60%_80%,rgba(70,100,190,0.16),rgba(70,100,190,0.04)_42%,transparent_64%)]" />

      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/neural-footer.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 "
        />
      </div>

      <svg
        className="absolute inset-x-0 top-0 h-[52px] w-full"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="#ffffff" d="M0 0 L1000 0 L1000 8 Q 500 168 0 8 Z" />
      </svg>

      <div
        className={`${colEdge} relative flex items-center justify-between pb-3.5 pt-12`}
      >
        <span className="text-[13px] font-medium tracking-wide text-[#c5d0e6]">
          {meta.domain}
        </span>
        <span className="text-[12px] tracking-wide text-[#8c9abc]">
          {meta.supportUrl}
        </span>
      </div>
    </footer>
  );
}
