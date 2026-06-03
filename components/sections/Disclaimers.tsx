import { colText } from "@/lib/layout";
import type { Disclaimer } from "@/lib/types";

export default function Disclaimers({
  disclaimers,
}: {
  disclaimers: Disclaimer[];
}) {
  return (
    <section className={`${colText} avoid-break mt-5 space-y-1.5`}>
      {disclaimers.map((item) => (
        <p key={item.term} className="text-[11.5px] leading-relaxed text-muted">
          <span className="font-semibold text-muted">{item.term}</span> —{" "}
          {item.text}
        </p>
      ))}
    </section>
  );
}
