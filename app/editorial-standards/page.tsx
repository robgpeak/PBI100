import LegalPage, { type LegalSection } from '../../components/LegalPage';

export const metadata = {
  title: 'Editorial Standards | Palm Beach Influence 100',
  description:
    'How Palm Beach Influence 100 selects, sources, verifies, and corrects the businesses it recognizes — and why inclusion cannot be bought.',
};

const sections: LegalSection[] = [
  {
    heading: 'The rule everything else follows from',
    body: [
      'Inclusion on Palm Beach Influence 100 cannot be bought. Not with a sponsorship, not with an advertising buy, not with a table at the gala, not with a podcast appearance. There is no fee to be nominated and no fee to be listed.',
      'A recognition list is only worth the credibility of its selection process. If a place on The List were for sale, being on it would mean nothing — to the businesses named, to the readers, and to us. This page exists so anyone can check our work.',
    ],
  },
  {
    heading: 'Editorial and commercial are kept apart',
    body: [
      'Selection decisions are made on editorial grounds alone. Sponsors, advertisers, event partners, and ticket holders receive no influence over who is selected and no advance notice of The List before it is published.',
      'Where content is sponsored, we label it clearly as sponsored so you always know what you are reading. A guest appearing on the podcast is an editorial booking unless we say otherwise in that episode.',
      'If we have a financial or personal interest in a business we cover, we disclose it in the coverage.',
    ],
  },
  {
    heading: 'How organizations are selected',
    body: [
      'We look for organizations that meaningfully influence the Palm Beach market. In practice, we weigh:',
    ],
    bullets: [
      'A genuine Palm Beach County presence — headquartered here, or running substantial operations here.',
      'Currently operating, verifiable as an active organization at the time of publication.',
      'Demonstrable influence on commerce, capital, culture, philanthropy, lifestyle, or community.',
      'Relevance across our categories, so The List reflects the breadth of the county’s economy rather than one corner of it.',
      'Scale, trajectory, and institutional weight — including emerging companies whose direction matters, not only the largest incumbents.',
    ],
  },
  {
    heading: 'Sourcing and verification',
    body: [
      'Every entry is compiled from publicly available information, and each record is kept alongside the source it was verified against. We prefer primary sources — company filings, official statements, and established reporting — and we check that an organization is active before publishing it.',
      'We do not publish claims we cannot source. Where something is our editorial assessment rather than a verifiable fact, we present it as such.',
    ],
  },
  {
    heading: 'Order is not a ranking',
    body: [
      'The number beside each honoree is a stable display index, not an ordinal judgment of merit. Position one is not “better” than position one hundred, and the order does not encode a score.',
      'We publish it this way deliberately. Reducing a hundred organizations across eight very different categories to a single ranked column would imply a precision no honest methodology can deliver.',
    ],
  },
  {
    heading: 'Nominations',
    body: [
      'Anyone may nominate a business, including the business itself. Nominations are one input into our research, not a queue — they are reviewed on merit, relevance, and impact, and inclusion is never guaranteed.',
      'Self-nomination carries no penalty and no advantage. Volume of nominations does not move an organization up.',
    ],
  },
  {
    heading: 'Corrections',
    body: [
      'We will get things wrong, and when we do we want to hear about it. Write to us and we will investigate promptly. If we published an error of fact, we correct it and — where the error was material — we note that a correction was made rather than changing the record silently.',
      'The fastest way to reach us about an error is corrections@pbi100.com.',
    ],
  },
  {
    heading: 'Right of reply and removal',
    body: [
      'Organizations on The List did not apply to be there; we selected them editorially from public information. So we extend two commitments.',
      'First, a right of reply: if you represent a listed organization and disagree with how it is characterized, send us your response and we will consider it seriously and, where warranted, reflect it in the entry.',
      'Second, removal on request: if you represent a listed organization and want it removed from The List, tell us and we will remove it. We will not require a reason, and we will not argue the point.',
    ],
  },
  {
    heading: 'Independence from those we cover',
    body: [
      'Being covered by us creates no obligation to buy anything from us, and declining to buy anything from us has no effect on coverage. Honorees are not required to purchase tickets, sponsorships, plaques, licenses, or reprints, and none of those things are a condition of recognition.',
    ],
  },
  {
    heading: 'How to hold us to this',
    body: [
      'If you believe we have departed from any of these standards — including anyone suggesting that a place on The List can be purchased — tell us directly. We would rather hear it and fix it than have it be true.',
    ],
  },
];

export default function EditorialStandardsPage() {
  return (
    <LegalPage
      eyebrow="Editorial"
      title="Editorial Standards"
      summary="How organizations are selected, sourced, and verified — and the commitments we make to the businesses we name, starting with the fact that a place on The List is never for sale."
      updated="July 21, 2026"
      sections={sections}
      contactLabel="Corrections and editorial questions"
      contactEmail="corrections@pbi100.com"
    />
  );
}
