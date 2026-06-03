import DocumentHeader from "@/components/layout/DocumentHeader";
import DocumentFooter from "@/components/layout/DocumentFooter";
import RecoveryIntro from "@/components/sections/RecoveryIntro";
import CriticalWarning from "@/components/sections/CriticalWarning";
import SeedSection from "@/components/sections/SeedSection";
import HowToUse from "@/components/sections/HowToUse";
import Disclaimers from "@/components/sections/Disclaimers";
import DownloadPdfButton from "@/components/ui/DownloadPdfButton";
import { seedDocument as doc } from "@/lib/document-data";

export default function Home() {
  const { meta } = doc;

  return (
    <div className="print-page flex min-h-screen items-start justify-center px-4 py-8 sm:py-12">
      <article className="document w-full max-w-[820px] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ink/20">
        <DocumentHeader meta={meta} />

        <main className="pb-8">
          <RecoveryIntro intro={doc.intro} />
          <CriticalWarning critical={doc.critical} />
          <SeedSection seed={doc.seed} verification={doc.verification} />
          <HowToUse howToUse={doc.howToUse} />
          <Disclaimers disclaimers={doc.disclaimers} />
        </main>

        <DocumentFooter meta={meta} />
      </article>

      <DownloadPdfButton />
    </div>
  );
}
