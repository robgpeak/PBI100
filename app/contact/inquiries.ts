export type Inquiry = {
  title: string;
  description: string;
};

export const inquiries: Inquiry[] = [
  { title: 'General inquiry', description: 'Questions about the platform, editorial focus, or updates.' },
  {
    title: 'Gala tickets',
    description: 'Individual seats, tables of ten, and attendance for the Palm Beach Influence 100 Gala.',
  },
  { title: 'Nomination question', description: 'Assistance with the nomination process and eligibility.' },
  { title: 'Podcast guest suggestion', description: 'Recommend a guest for The Palm Beach Influence Podcast.' },
  { title: 'Sponsorship inquiry', description: 'Discuss sponsorship, events, or partnership opportunities.' },
  { title: 'Press / media', description: 'Media inquiries and content partnership requests.' },
  { title: 'Partnership', description: 'Explore strategic platform and event collaboration.' },
];

export const GALA_INQUIRY = 'Gala tickets';
