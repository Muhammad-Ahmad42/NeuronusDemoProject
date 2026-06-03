import { colText } from "@/lib/layout";

export default function RecoveryIntro({ intro }: { intro: string }) {
  return (
    <section className={`${colText} avoid-break pt-6`}>
      <h1 className="font-heading text-[29px] font-bold leading-tight tracking-tight text-ink">
        Your Recovery Seed
      </h1>
      <p className="mt-2.5 text-[14.5px] leading-[1.6] text-body">{intro}</p>
    </section>
  );
}
