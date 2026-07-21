export type Honoree = {
  rank: number;
  name: string;
  city: string;
  category: Category;
  description: string;
  why: string;
  focus: string;
  founded: string;
  source: string;
};

export const categories = [
  'Capital & Wealth',
  'Real Estate & Development',
  'Luxury, Hospitality & Lifestyle',
  'Professional Power Centers',
  'Healthcare & Longevity',
  'Media, Events & Influence',
  'Philanthropy & Civic Institutions',
  'Emerging Growth Businesses',
] as const;

export type Category = (typeof categories)[number];
