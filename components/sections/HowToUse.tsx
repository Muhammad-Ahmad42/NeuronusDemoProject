import { colBox } from "@/lib/layout";
import type { HowToUse as HowToUseData } from "@/lib/types";

export default function HowToUse({ howToUse }: { howToUse: HowToUseData }) {
  return (
    <div className={`${colBox} mt-6`}>
      <section
        aria-labelledby="howto-heading"
        className="avoid-break rounded-xl border border-info-border bg-info-bg px-5 py-3.5"
      >
        <h2
          id="howto-heading"
          className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-info"
        >
          <span aria-hidden="true" className="text-[9px]">
            ●
          </span>
          {howToUse.title}
        </h2>
        <ol className="mt-2 space-y-1">
          {howToUse.steps.map((step) => (
            <li key={step} className="text-[12.5px] leading-snug text-info-text">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
