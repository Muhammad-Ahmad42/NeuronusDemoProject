
export interface BrandInfo {
  name: string;
  unit: string;
  subtitle: string;
}

export interface DocumentMeta {
  brand: BrandInfo;
  generatedAt: string;
  classification: string;
  domain: string;
  supportUrl: string;
}

export interface HowToUse {
  title: string;
  steps: string[];
}

export interface Disclaimer {
  term: string;
  text: string;
}

export interface SeedDocument {
  meta: DocumentMeta;
  intro: string;
  critical: { title: string; points: string[] };
  seed: { title: string; subtitle: string; words: string[] };
  verification: { title: string; notes: string[]; checklist: string[] };
  howToUse: HowToUse;
  disclaimers: Disclaimer[];
}
