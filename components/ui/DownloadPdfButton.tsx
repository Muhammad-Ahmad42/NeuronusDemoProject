export default function DownloadPdfButton() {
  return (
    <a
      href="/seed-recovery-document.pdf"
      download="Neuronus-Seed-Recovery-Document.pdf"
      className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-ink/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
      aria-label="Download this document as a PDF"
    >
      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d="M10 3v9m0 0l-3.5-3.5M10 12l3.5-3.5M4 15.5h12"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Download as PDF
    </a>
  );
}
