import LegalPage, { type LegalSection } from '../../components/LegalPage';

export const metadata = {
  title: 'Privacy Policy | Palm Beach Influence 100',
  description:
    'How Palm Beach Influence 100 collects, uses, and protects personal information submitted through the site.',
};

const sections: LegalSection[] = [
  {
    heading: 'Who we are',
    body: [
      'Palm Beach Influence 100 is a curated editorial recognition and media platform operated by Palm Beach Influence 100, LLC, based in Palm Beach County, Florida. In this policy, “we,” “us,” and “our” refer to that company, and “the site” refers to pbi100.com.',
      'This policy explains what personal information we collect through the site, why we collect it, who we share it with, and the choices you have. It applies to the site and to email we send you. It does not apply to third-party websites we link to.',
    ],
  },
  {
    heading: 'Information you give us',
    body: [
      'We only receive personal information from you when you choose to send it. That happens in a few places:',
    ],
    bullets: [
      'Contact and inquiry forms — your name, email address, phone number if you provide one, and whatever you write in your message.',
      'Nominations — your contact details and the information you submit about the business you are nominating.',
      'Gala ticket inquiries — your name, contact details, and any details about seating, guests, or partnership interest you share with us.',
      'Email updates — the email address you give us when you subscribe to announcements about nomination deadlines, podcast releases, the annual list, and events.',
    ],
  },
  {
    heading: 'Information collected automatically',
    body: [
      'The site is a static website served by GitHub Pages. Like nearly all web hosting, that service records standard technical request data — such as IP address, browser type, and the pages requested — for delivery, security, and abuse prevention. That processing is governed by GitHub’s own privacy practices.',
      'We do not run advertising networks, tracking pixels, or third-party analytics on the site, and we do not use cookies to profile you or follow you across other websites. The gala invitation you may see on your first visit is remembered only for the duration of your browsing session, using storage on your own device that is cleared when you close the tab. That information never leaves your browser.',
      'If we add analytics in the future, we will update this policy before doing so.',
    ],
  },
  {
    heading: 'Information about businesses on The List',
    body: [
      'The List profiles organizations, not private individuals. Entries are compiled from publicly available sources, and each record is kept with the source it was verified against. Where an entry names a person in their professional capacity — a founder or an executive, for example — that information is published as business information in an editorial context.',
      'If you are associated with a listed organization and want an entry corrected or removed, see our Editorial Standards. We honor removal requests from the organizations we list.',
    ],
  },
  {
    heading: 'How we use your information',
    bullets: [
      'To respond to your inquiry, nomination, ticket request, or partnership question.',
      'To send you the email updates you asked for, and to manage that subscription.',
      'To evaluate nominations and conduct the editorial research behind the platform.',
      'To plan and administer events, including seating and guest logistics for the gala.',
      'To maintain the security and integrity of the site and to comply with the law.',
    ],
  },
  {
    heading: 'How we share information',
    body: [
      'We do not sell your personal information, and we do not rent or trade it. We share it only in these circumstances:',
    ],
    bullets: [
      'Service providers who work on our behalf — our email delivery platform, our hosting provider, and similar vendors — and only to the extent needed to do that work.',
      'Event partners, where sharing is necessary to administer an event you have asked to attend, such as a venue needing a guest list.',
      'Legal and safety reasons, where we are required to disclose information by law or need to protect our rights, our users, or the public.',
      'A successor entity, if the platform is ever sold or merged, subject to this policy.',
    ],
  },
  {
    heading: 'Email and how to stop it',
    body: [
      'If you subscribe to updates, we will email you about the platform and its events. Every message includes an unsubscribe link, and unsubscribing takes effect promptly. You can also email us to be removed.',
      'We will still reply to inquiries you send us, even if you have unsubscribed from marketing email.',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'We keep inquiry and nomination correspondence for as long as it is useful to the editorial and event work it relates to, and then delete it. Subscription records are kept until you unsubscribe. We may keep limited records longer where the law requires it.',
    ],
  },
  {
    heading: 'Your choices and rights',
    body: [
      'You can ask us to tell you what personal information we hold about you, to correct it, or to delete it. You can withdraw consent for marketing email at any time. To make a request, email us at the address below; we may need to verify your identity before acting.',
      'Depending on where you live — including under Florida law, and under the laws of California, the European Economic Area, or the United Kingdom — you may have additional rights over your personal information. Tell us where you are located when you write to us and we will honor the rights that apply to you.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'The site is served over HTTPS, and we limit access to inquiry and subscriber information to the people who need it. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we take the protection of what you send us seriously.',
    ],
  },
  {
    heading: 'Children',
    body: [
      'The platform is intended for business audiences and is not directed to children under 16. We do not knowingly collect personal information from children. If you believe a child has sent us personal information, contact us and we will delete it.',
    ],
  },
  {
    heading: 'Links to other sites',
    body: [
      'The List, the podcast, and other pages link to third-party websites, including the sources behind our research. We do not control those sites and are not responsible for their privacy practices. Review their policies before sharing information with them.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy as the platform grows — for example, if we begin using analytics or add ticketing. When we do, we will revise the “last updated” date above, and for material changes we will make the update conspicuous on the site.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      summary="What we collect, why we collect it, and what you can ask us to do about it. We keep this short because we collect very little."
      updated="July 21, 2026"
      sections={sections}
      contactLabel="Privacy questions and requests"
      contactEmail="privacy@pbi100.com"
    />
  );
}
