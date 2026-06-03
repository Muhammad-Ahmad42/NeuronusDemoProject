"use client";

import { useId, useState } from "react";

export default function ChecklistItem({ label }: { label: string }) {
  const id = useId();
  const [checked, setChecked] = useState(false);

  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-center gap-2.5 py-[5px]"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className={`flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-[3px] border text-white transition-colors duration-150 peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40 ${
          checked
            ? "border-brand bg-brand"
            : "border-card-line bg-white group-hover:border-brand"
        }`}
      >
        <svg
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 transition-transform duration-150 ${
            checked ? "scale-100" : "scale-0"
          }`}
          fill="none"
        >
          <path
            d="M2.5 6.2L4.8 8.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[13px] leading-snug text-ink/85">{label}</span>
    </label>
  );
}
