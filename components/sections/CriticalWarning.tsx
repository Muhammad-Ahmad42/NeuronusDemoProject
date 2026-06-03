import { colBox } from "@/lib/layout";

interface CriticalWarningProps {
  critical: { title: string; points: string[] };
}

export default function CriticalWarning({ critical }: CriticalWarningProps) {
  return (
    <div className={`${colBox} mt-5`}>
      <section
        aria-labelledby="critical-heading"
        className="avoid-break rounded-xl border border-warn-border bg-warn-bg px-5 py-3.5"
      >
        <h2
          id="critical-heading"
          className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-warn"
        >
          <span aria-hidden="true" className="text-[9px]">
            ●
          </span>
          {critical.title}
        </h2>
        <ul className="mt-2 space-y-1">
          {critical.points.map((point) => (
            <li
              key={point}
              className="flex gap-2 text-[12.5px] leading-snug text-warn-text"
            >
              <span aria-hidden="true" className="mt-[3px] text-[8px]">
                ●
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
