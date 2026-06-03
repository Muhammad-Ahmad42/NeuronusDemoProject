import type { BrandInfo } from "@/lib/types";

interface LogoProps {
  brand: BrandInfo;
  tone?: "light" | "dark";
  withSubtitle?: boolean;
  className?: string;
}

export default function Logo({
  brand,
  tone = "light",
  withSubtitle = false,
  className = "",
}: LogoProps) {
  const wordmark = tone === "light" ? "text-white" : "text-ink";
  const subtitle = tone === "light" ? "text-white/90" : "text-body";

  return (
    <div className={`flex flex-col gap-2.5 ${className} `}>
      <div className="flex items-center gap-2.5">
        <svg
          viewBox="0 0 32 40"
          className="h-8 w-auto shrink-0"
          role="img"
          aria-label={`${brand.name} ${brand.unit} logo`}
        >
          <defs>
            <linearGradient id="neuronus-n" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5b8bff" />
              <stop offset="55%" stopColor="#3b66e6" />
              <stop offset="100%" stopColor="#6c4ddb" />
            </linearGradient>
          </defs>
          <path
            d="M8 32 V11 L24 32 V11"
            fill="none"
            stroke="url(#neuronus-n)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="10" r="2.4" fill="#5b8bff" />
          <circle cx="24" cy="32" r="2.4" fill="#6c4ddb" />
        </svg>

        <div
          className={`font-heading text-[16px] font-bold leading-[1.1] tracking-tight ${wordmark}`}
        >
          <span className="block">{brand.name}</span>
          <span className="block">{brand.unit}</span>
        </div>
      </div>

      {withSubtitle && (
        <p
          className={`font-heading text-[12.5px] font-semibold tracking-wide ${subtitle}`}
        >
          {brand.subtitle}
        </p>
      )}
    </div>
  );
}
