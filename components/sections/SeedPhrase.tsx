import WordCard from "@/components/ui/WordCard";

interface SeedPhraseProps {
  seed: { title: string; subtitle: string; words: string[] };
}

export default function SeedPhrase({ seed }: SeedPhraseProps) {
  return (
    <div>
      <h2 className="font-heading text-[18px] font-bold tracking-tight text-ink" >
        {seed.title}
      </h2>
      <p className="mt-1 text-[13px] text-body">{seed.subtitle}</p>

      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-4 sm:gap-x-4">
        {seed.words.map((word, i) => (
          <WordCard key={word} index={i + 1} word={word} />
        ))}
      </div>
    </div>
  );
}
