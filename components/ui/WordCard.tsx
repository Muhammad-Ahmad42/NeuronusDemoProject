interface WordCardProps {
  index: number;
  word: string;
}

export default function WordCard({ index, word }: WordCardProps) {
  return (
    <div className="avoid-break relative flex h-[48px] items-center justify-center rounded-lg border border-[#d6d9e0] bg-white px-2 shadow-[0_1px_2px_rgba(20,30,70,0.05)] transition-colors duration-200 hover:border-brand/50 hover:bg-brand/[0.03]">
      <span className="absolute left-2.5 top-1.5 text-[10px] font-medium leading-none text-muted">
        {index}.
      </span>
      <span className="font-heading text-[13.5px] font-semibold tracking-wide text-ink">
        {word}
      </span>
    </div>
  );
}
