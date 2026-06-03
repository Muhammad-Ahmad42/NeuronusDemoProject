import ChecklistItem from "@/components/ui/ChecklistItem";

interface VerificationProps {
  verification: { title: string; notes: string[]; checklist: string[] };
}

export default function Verification({ verification }: VerificationProps) {
  return (
    <div className="mt-5">
      <h2 className="font-heading text-[15px] font-bold tracking-tight text-ink">
        {verification.title}
      </h2>

      <div className="mt-1.5 space-y-0.5">
        {verification.notes.map((note) => (
          <p key={note} className="text-[12.5px] leading-snug text-body">
            {note}
          </p>
        ))}
      </div>

      <ul className="mt-3">
        {verification.checklist.map((label) => (
          <li key={label}>
            <ChecklistItem label={label} />
          </li>
        ))}
      </ul>
    </div>
  );
}
