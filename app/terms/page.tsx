import LegalPage, { type LegalSection } from '../../components/LegalPage';

export const metadata = {
  title: 'Terms | Palm Beach Influence 100',
  description:
    'The terms governing use of the Palm Beach Influence 100 site, nominations, submissions, events, and content.',
};

const sections: LegalSection[] = [
  {
    heading: 'Agreement to these terms',
    body: [
      'These terms are a legal agreement between you and Palm Beach Influence 100, LLC (“we,” “us,” “our”), a company based in Palm Beach County, Florida. They govern your use of pbi100.com and anything you submit through it.',
      'By using the site, you accept these terms. If you do not agree with them, please do not use the site.',
    ],
  },
  {
    heading: 'What the platform is',
    body: [
      'Palm Beach Influence 100 is a curated editorial recognition and media platform. We research, select, and publish a list of businesses and institutions we judge to be shaping Palm Beach County, and we produce related editorial, a podcast, and events.',
      'The platform is editorial commentary and business journalism. It is not a rating agency, a registry, an endorsement, or a certification of any business named on it.',
    ],
  },
  {
    heading: 'Inclusion is editorial and cannot be purchased',
    body: [
      'Selection for The List is an editorial decision. It is not for sale, and no payment, sponsorship, ticket purchase, advertising, or partnership buys, influences, or accelerates inclusion. If anyone tells you otherwise, they are not speaking for us — please report it to us.',
      'Our Editorial Standards describe how entries are selected, sourced, corrected, and removed. Those standards are part of how we operate, and we hold ourselves to them.',
    ],
  },
  {
    heading: 'Nominations and what you submit',
    body: [
      'Anyone may nominate a business. Submitting a nomination does not create an obligation for us to review, respond to, publish, or include anyone, and inclusion is never guaranteed.',
      'When you send us a nomination, message, or other material, you confirm that you have the right to share it and that it is accurate to the best of your knowledge. You grant us a non-exclusive, royalty-free license to use, edit, and publish that material as part of our editorial research and coverage. You keep ownership of what you submit.',
      'Do not send us confidential information you do not want published, and do not submit anything that is unlawful, defamatory, or infringes someone else’s rights.',
    ],
  },
  {
    heading: 'Events and tickets',
    body: [
      'Inquiring about the gala or any other event is a request for information. It is not a ticket purchase, a reservation, or a binding offer by either of us, and it does not guarantee admission.',
      'Attendance is confirmed only in writing by us, and any ticket, table, or sponsorship is governed by the separate terms provided at that time. Event details — including date, venue, format, and programming — may change, and events may be rescheduled or cancelled.',
    ],
  },
  {
    heading: 'Sponsorship and partnerships',
    body: [
      'Sponsorships, advertising, and partnerships are governed by separate written agreements. Where content on the site or the podcast is sponsored, we label it. Commercial relationships never affect editorial selection, and sponsors receive no advance notice of, or influence over, The List.',
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      'The site, its written content, design, photography, and the Palm Beach Influence 100 name and marks are owned by us or used with permission, and are protected by copyright and trademark law. You may read, share, and quote from our content with attribution and a link. You may not republish it wholesale, or use our name or marks to imply an endorsement or affiliation we have not granted.',
      'Business names, marks, and logos belonging to organizations we cover remain the property of their owners. We use them for identification in an editorial context. Appearing on The List does not create any affiliation between that organization and us, and does not imply that organization endorses us.',
    ],
  },
  {
    heading: 'Acceptable use',
    bullets: [
      'Do not scrape, harvest, or systematically copy The List or any part of the site.',
      'Do not use information from the site to send unsolicited commercial email or otherwise contact listed businesses in violation of the law.',
      'Do not misrepresent your relationship to us, or claim an award, ranking, or endorsement we did not give.',
      'Do not attempt to disrupt, probe, or gain unauthorized access to the site or its infrastructure.',
      'Do not use the site for any unlawful purpose.',
    ],
  },
  {
    heading: 'No professional advice',
    body: [
      'Everything on the site is published for general information. It is not investment, financial, legal, tax, or other professional advice, and you should not rely on it as a basis for any decision. Nothing here is a recommendation to buy, sell, or hold any security or to transact with any business we cover. Consult a qualified professional about your own circumstances.',
    ],
  },
  {
    heading: 'Accuracy and rankings',
    body: [
      'We research carefully and correct errors promptly, but we do not warrant that everything on the site is complete, current, or free of error. Business facts change quickly.',
      'The order in which honorees appear is a stable display index, not a ranking of merit. Position on The List does not mean one organization outranks another.',
    ],
  },
  {
    heading: 'Disclaimers and limitation of liability',
    body: [
      'The site is provided “as is” and “as available,” without warranties of any kind, express or implied, to the fullest extent the law allows. We do not warrant that the site will be uninterrupted, secure, or error-free.',
      'To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, data, or goodwill, arising from your use of the site. Our total liability for any claim relating to the site will not exceed one hundred U.S. dollars (US$100), or the amount you paid us in the twelve months before the claim, whichever is greater.',
      'Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',
    ],
  },
  {
    heading: 'Indemnification',
    body: [
      'You agree to indemnify and hold us harmless from claims, losses, and reasonable legal fees arising out of your use of the site, your submissions, or your breach of these terms.',
    ],
  },
  {
    heading: 'Third-party links',
    body: [
      'We link to third-party sites, including the public sources behind our research. We do not control them and are not responsible for their content, products, or practices.',
    ],
  },
  {
    heading: 'Changes to the site and these terms',
    body: [
      'We may change, suspend, or discontinue any part of the site at any time. We may also update these terms; when we do, we will revise the “last updated” date above. Continuing to use the site after a change means you accept the revised terms.',
    ],
  },
  {
    heading: 'Governing law',
    body: [
      'These terms are governed by the laws of the State of Florida, without regard to its conflict-of-laws rules. You and we agree that any dispute will be brought exclusively in the state or federal courts located in Palm Beach County, Florida, and we each consent to the jurisdiction of those courts.',
      'If any provision of these terms is found unenforceable, the rest remain in effect.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      summary="The ground rules for using the site, submitting a nomination, and inquiring about our events — including the one rule that matters most: inclusion on The List is never for sale."
      updated="July 21, 2026"
      sections={sections}
      contactLabel="Questions about these terms"
      contactEmail="legal@pbi100.com"
    />
  );
}
