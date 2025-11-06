/**
 * Task 5: Brand convention & Nominal typing
 */

// Brand helpers
type MajorBrand = { readonly __brand: 'MajorCredits' };
type MinorBrand = { readonly __brand: 'MinorCredits' };

export interface MajorCredits extends MajorBrand {
  credits: number;
}

export interface MinorCredits extends MinorBrand {
  credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
