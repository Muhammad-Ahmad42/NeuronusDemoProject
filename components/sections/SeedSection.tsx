import Image from "next/image";
import SeedPhrase from "@/components/sections/SeedPhrase";
import Verification from "@/components/sections/Verification";
import { colCard, cardPad } from "@/lib/layout";
import type { SeedDocument } from "@/lib/types";

interface SeedSectionProps {
  seed: SeedDocument["seed"];
  verification: SeedDocument["verification"];
}

export default function SeedSection({ seed, verification }: SeedSectionProps) {
  return (
    <section className="relative mt-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-4 bottom-0 overflow-hidden rounded-[18px] border border-white/70 "
      >
        <Image
          src="/assets/neural-network.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.55]"
        />
        <div className="absolute left-0 top-6 h-[280px] w-[150px]">
          <Image
            src="/assets/neuron-cell.jpeg"
            alt=""
            fill
            sizes="150px"
            className="object-contain object-left-top opacity-90 mix-blend-multiply"
          />
        </div>
      </div>

      <div className={`${colCard} relative`}>
        <div
          className={`${cardPad} relative overflow-hidden rounded-[18px] border border-white/70 bg-gradient-to-br from-white/95 via-white/92 to-[#eef2fa]/90 shadow-[0_22px_55px_-20px_rgba(14,27,61,0.28)] backdrop-blur-[3px]`}
        >
          <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-72 rounded-full bg-[radial-gradient(circle,rgba(150,185,255,0.30),transparent_70%)]" />

          <div className="relative">
            <SeedPhrase seed={seed} />
            <Verification verification={verification} />
          </div>
        </div>
      </div>
    </section>
  );
}
