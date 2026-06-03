import type { SeedDocument } from "./types";

export const seedDocument: SeedDocument = {
  meta: {
    brand: {
      name: "Neuronus",
      unit: "Computing",
      subtitle: "Seed Recovery Document",
    },
    generatedAt: "2026-04-29 16:50 UTC",
    classification: "Confidential",
    domain: "neuronus.net",
    supportUrl: "support.help.neuronus.net",
  },

  intro:
    "This document contains the 16-word seed phrase that gives you access to your entire Neuronus ecosystem — all tools, all data, one key.",

  critical: {
    title: "CRITICAL — READ BEFORE STORING",
    points: [
      "This seed phrase is the ONLY way to access your Neuronus account.",
      "Neuronus does not store your seed and cannot recover it if lost.",
      "Anyone with this seed phrase has full access to your account and all data.",
      "Never photograph, scan, or store this document digitally.",
      "Store this paper in a secure, private location — treat it like a bank key.",
    ],
  },

  seed: {
    title: "Your 16-Word Seed Phrase",
    subtitle: "Write each word in order. The sequence matters.",
    words: [
      "EXACT",
      "ENVELOPE",
      "FASHION",
      "EMBRACE",
      "AEROBIC",
      "DIRECT",
      "ABSURD",
      "ADDRESS",
      "ALBUM",
      "DRY",
      "DOLL",
      "EVOKE",
      "FALL",
      "EMOTION",
      "DISCOVER",
      "FACE",
    ],
  },

  verification: {
    title: "Verification",
    notes: [
      "After storing this document, verify your seed by logging into neuronus.net.",
      "If you can log in successfully, your seed is correct. If not, generate a new one immediately.",
    ],
    checklist: [
      "I have written down all 16 words in the correct order.",
      "I have verified the seed by logging in successfully.",
      "I will store this document in a secure, private location.",
      "I understand that losing this seed means permanent loss of access.",
      "I will never share this seed with anyone, including Neuronus support.",
    ],
  },

  howToUse: {
    title: "HOW TO USE YOUR SEED",
    steps: [
      "Go to neuronus.net (or any Neuronus tool: mail.neuronus.net, etc.)",
      'Click "Log in with seed phrase"',
      "Enter your 16 words in the exact order shown above",
      "You now have access to all Neuronus tools — email, storage, messenger, and more",
    ],
  },

  disclaimers: [
    {
      term: "Neuronus Computing",
      text: "Encrypted tools that protect your identity.",
    },
    {
      term: "Zero-Knowledge Encryption",
      text: "even Neuronus cannot see or store your seed phrase.",
    },
    {
      term: "Zero-Knowledge Architecture",
      text: "your privacy is mathematically guaranteed, not just promised.",
    },
  ],
};
