// ============================================================================
// SINGLE SOURCE OF TRUTH for all site content.
// Every piece of text rendered on the site lives here.
// No JSX file should hardcode content that belongs in this file.
// ============================================================================

// ── BRAND ─────────────────────────────────────────────────────────────────────

export const brand = {
  name: "Neutral Advisory",
  subtitle: "Strategic Negotiation & Commercial Resolution Advisory",
  positioningStatement:
    "Neutral Advisory helps executives and boards achieve resolution in high-stakes commercial disputes through structured negotiation, institutional navigation, and strategic decision support."
};

// ── HERO (Home Page) ──────────────────────────────────────────────────────────

export const hero = {
  headline: "We Help Executives Resolve Commercial Disputes Before They Become Litigation",
  body:
    "High-stakes strategic negotiation and commercial dispute advisory, helping organizations achieve resolution while navigating complex, institutional red tape.",
  primaryCta: "Request Confidential Consultation",
  secondaryCta: "Meet the Founder"
};

// Eyebrow tag pills shown inside the hero
export const heroTags = [
  "Strategic Advisory",
  "Negotiation & Dispute Resolution",
  "Banking · Insurance · TMT"
];

// Three pillars shown below hero body copy
export const pillars = [
  {
    numeral: "I",
    title: "Negotiate",
    body: "Develop structured negotiation strategies for commercially significant matters."
  },
  {
    numeral: "II",
    title: "Navigate",
    body: "Work through institutional complexity involving financial institutions, insurers, regulators, and other key stakeholders."
  },
  {
    numeral: "III",
    title: "Resolve",
    body: "Achieve commercially sustainable outcomes through disciplined engagement and strategic negotiation."
  }
];

// ── OBJECTIVE THINKING SECTION (Home Page) ────────────────────────────────────

export const objectiveThinking = {
  eyebrow: "Our Philosophy",
  headline: "Objective Thinking Creates Better Commercial Outcomes.",
  body:
    "Commercial negotiations often become difficult not because solutions are unavailable, but because stakeholders become entrenched in positions rather than interests.",
  body2:
    "Neutral Advisory helps organizations negotiate with clarity, structure, and commercial discipline—enabling informed decisions that preserve business value and support sustainable outcomes."
};

// ── ABOUT PAGE CONTENT ────────────────────────────────────────────────────────

export const about = {
  // Section 1: Strategy Before Escalation
  strategyBeforeEscalation: {
    eyebrow: "About Neutral Advisory",
    headline: "Strategy Before Escalation.",
    body: [
      "Many commercial disputes become unnecessarily prolonged because they begin without a structured negotiation strategy.",
      "Neutral Advisory was established to provide organizations with independent strategic advice before commercial disagreements evolve into expensive legal, operational, or reputational challenges."
    ],
    principles: [
      "Objectivity",
      "Commercial Thinking",
      "Structured Negotiation"
    ],
    body2:
      "We assist organizations in preparing for negotiations, engaging with institutional stakeholders, managing complex commercial discussions, and pursuing practical business outcomes."
  },

  // Section 2: Why "Neutral"
  whyNeutral: {
    eyebrow: "Why \"Neutral\"",
    headline: "Neutral represents an objective perspective.",
    body:
      "We believe successful negotiations are built on facts, preparation, commercial understanding, and disciplined execution—not emotion or confrontation.",
    body2:
      "Being neutral enables better analysis, stronger negotiation strategy, and more sustainable commercial outcomes."
  },

  // Section 3: The Meaning Behind the Name
  meaningBehindName: {
    eyebrow: "Brand Philosophy",
    headline: "The Meaning Behind the Name",
    body:
      "\"Neutral\"\n\nSuccessful negotiations are built on facts, preparation, commercial understanding, and disciplined execution.\n\nBeing neutral enables better analysis, relevant negotiation strategy, and more sustainable commercial outcomes rather than remaining biased, myopic, or stuck in impasse."
  },

  // Section 4: The Neutral Method
  neutralMethod: {
    eyebrow: "The Neutral Method",
    headline: "Focused preparation. A dedicated strategic partner for high-stakes commercial matters, implementing proprietary techniques and expertise.",
    body: "Every engagement follows the same disciplined four-phase framework — proprietary techniques applied by a dedicated partner, not a generalist team.",
    steps: [
      { numeral: "I", title: "Prepare", body: "Construct a precise map of the negotiation landscape: stakeholders, interests, alternatives, and constraints—yours and theirs." },
      { numeral: "II", title: "Strategize", body: "From intelligence, design a negotiation architecture—positions, sequencing, concession logic, and contingency responses tailored to your specific objective." },
      { numeral: "III", title: "Execute", body: "Strategy without execution is theory. We work alongside you through live negotiations, providing real-time counsel and adaptive guidance as conditions evolve." },
      { numeral: "IV", title: "Resolve", body: "Ensure that agreements reached translate into durable value—through precise drafting guidance, implementation planning, and relationship stewardship." }
    ]
  }
};

// ── SERVICES PAGE CONTENT ────────────────────────────────────────────────────

export const services = {
  intro: {
    eyebrow: "Advisory Engagements",
    headline: "Strategic Advisory for Complex Commercial Situations",
    body: "We structure our advisory engagements around risk preemption, board alignment, and value protection—before commercial disagreements become more complex."
  },

  // Six core services
  coreServices: [
    {
      title: "Strategic Negotiation Advisory",
      summary: "Developing negotiation strategies for commercially significant matters before, during, and after formal negotiations.",
      focus: [
        "Pre-negotiation positioning",
        "Leverage assessment",
        "Concession strategy design",
        "Real-time negotiation counsel"
      ],
      impact: "Clear posture and better outcomes in critical negotiations."
    },
    {
      title: "Commercial Dispute Strategy",
      summary: "Supporting organizations in resolving complex commercial disagreements while protecting business relationships and commercial interests.",
      focus: [
        "Contract disputes",
        "Joint venture conflicts",
        "Settlement strategy",
        "Stakeholder alignment"
      ],
      impact: "Faster resolution with stronger commercial relationships."
    },
    {
      title: "Banking & Financial Institution Advisory",
      summary: "Advising businesses on commercial negotiations involving financial institutions, including matters relating to loan closures, security documentation, post-settlement obligations, restructuring discussions, and institutional engagement.",
      focus: [
        "Post-closure obligations",
        "Security documentation disputes",
        "Restructuring negotiations",
        "Institutional engagement strategy"
      ],
      impact: "Structured resolution of banking matters without unnecessary escalation."
    },
    {
      title: "Insurance Claims & Settlement Advisory",
      summary: "Providing strategic support for organizations managing commercial insurance claim negotiations, settlement discussions, policy interpretation issues, and claim resolution processes.",
      focus: [
        "Claim strategy & positioning",
        "Coverage dispute navigation",
        "Multi-party claim coordination",
        "Settlement negotiation"
      ],
      impact: "Maximised claim recovery with minimised operational disruption."
    },
    {
      title: "Regulatory & Institutional Navigation",
      summary: "Helping organizations engage constructively with regulatory authorities and institutional stakeholders where commercial outcomes depend upon structured engagement and informed negotiation.",
      focus: [
        "Regulatory engagement strategy",
        "Institutional process navigation",
        "Compliance impact mitigation",
        "State-owned entity negotiations"
      ],
      impact: "Faster institutional resolution with reduced operational drag."
    },
    {
      title: "Executive Negotiation Support",
      summary: "Supporting founders, promoters, executive leadership, and boards during strategically important negotiations.",
      focus: [
        "Leverage assessment",
        "Board alignment",
        "Negotiation readiness",
        "Real-time decision support"
      ],
      impact: "Informed decisions and disciplined execution under pressure."
    }
  ]
};

// ── INDUSTRY EXPERIENCE ──────────────────────────────────────────────────────

export const industryExperience = {
  eyebrow: "Industry Experience",
  headline: "Experience Across Complex Commercial Environments",
  body: "Our experience includes negotiations and commercial matters involving:",
  sectors: [
    {
      title: "Banking & Financial Services",
      items: [
        "Commercial lending",
        "Loan closure processes",
        "Institutional negotiations",
        "Settlement discussions",
        "Documentation disputes"
      ]
    },
    {
      title: "Insurance",
      items: [
        "Commercial claims",
        "Claims settlement negotiations",
        "Coverage interpretation",
        "Institutional engagement"
      ]
    },
    {
      title: "Telecommunications",
      items: [
        "Commercial contracts",
        "Regulatory environments",
        "Customer and enterprise negotiations",
        "Product-related commercial matters"
      ]
    },
    {
      title: "Highly Regulated Industries",
      items: [
        "Cross-sector regulatory navigation",
        "Multi-authority stakeholder management",
        "Compliance impact on commercial operations",
        "Institutional engagement frameworks"
      ],
      note: "Organizations operating within complex regulatory frameworks requiring structured engagement with multiple stakeholders."
    }
  ]
};

// ── COMMERCIAL SCENARIOS ─────────────────────────────────────────────────────

export const commercialScenarios = {
  eyebrow: "Commercial Scenarios",
  headline: "Where Strategic Negotiation Makes the Difference",
  body: "Every commercial challenge is unique. The following examples illustrate situations where structured negotiation and objective advisory can significantly influence outcomes.",
  scenarios: [
    {
      number: "01",
      title: "Post-Closure Banking Obligations",
      tag: "Banking",
      situation: "A company has completed repayment of its borrowing facilities. Months later, unresolved documentation, security release requirements, and institutional processes continue to delay closure.",
      resolution: "Neutral Advisory helps develop a structured engagement strategy with the financial institution, align stakeholders, clarify obligations, and negotiate an efficient commercial resolution."
    },
    {
      number: "02",
      title: "Commercial Insurance Claims",
      tag: "Insurance",
      situation: "A business experiences a significant operational loss and submits an insurance claim. Differences emerge regarding policy interpretation, claim valuation, supporting documentation, and settlement timelines.",
      resolution: "Neutral Advisory supports management by developing negotiation strategies, preparing commercial positions, coordinating stakeholder engagement, and facilitating constructive settlement discussions."
    },
    {
      number: "03",
      title: "High-Value Commercial Negotiations",
      tag: "Commercial Strategy",
      situation: "An organization is engaged in negotiations where commercial relationships remain important despite significant disagreement over contractual obligations.",
      resolution: "Neutral Advisory assists leadership teams in identifying negotiation pathways that preserve commercial value while progressing toward practical resolution."
    },
    {
      number: "04",
      title: "Regulatory & Institutional Challenges",
      tag: "Regulatory",
      situation: "A business encounters prolonged delays arising from complex regulatory or institutional processes affecting commercial operations.",
      resolution: "Neutral Advisory helps organizations structure engagement, prepare strategic communications, and navigate institutional environments more effectively."
    },
    {
      number: "05",
      title: "Multi-Stakeholder Commercial Deadlocks",
      tag: "Stakeholder Alignment",
      situation: "Projects involving lenders, insurers, customers, suppliers, consultants, or regulators often reach a point where progress stalls because each stakeholder has competing priorities.",
      resolution: "Neutral Advisory develops negotiation frameworks that identify common interests, manage stakeholder expectations, and facilitate commercially viable outcomes."
    },
    {
      number: "06",
      title: "Executive Negotiation Support",
      tag: "Executive Advisory",
      situation: "Business leaders are often required to negotiate under significant financial, operational, or reputational pressure.",
      resolution: "Neutral Advisory provides confidential strategic advice before and throughout critical negotiations, enabling informed decisions and disciplined execution."
    }
  ]
};

// ── FOUNDER (PRESERVED - DO NOT MODIFY) ──────────────────────────────────────

export const founder = {
  name: "Shrivatsan Balagopal",
  title: "Founder & Principal",
  tagline:
    "Strategic Negotiation Advisor | Commercial Resolution Specialist | Executive Decision Support",
  bio: [
    "Shrivatsan works directly with corporate leaders, boards, and advisory teams when a commercial dispute has gotten complicated enough that they need someone outside the building to help think it through.",
    "His background spans banking, insurance, and telecom — sectors where the stakes are high and the regulatory environment leaves little room for error. That experience shapes how he reads a dispute and where he looks for the path out of it.",
    "His work today focuses on high-value commercial claims, post-lending disputes, regulatory friction, and restructuring negotiations — situations where discipline and a clear head matter more than posturing."
  ],
  philosophy:
    "I've never seen a negotiation won by being the loudest person in the room. The ones that go well are won beforehand — by understanding what the other side actually needs, not just what they're asking for."
};

export const founderExpertiseAreas = [
  "High-Value Commercial Negotiations",
  "Commercial Dispute Resolution Strategy",
  "Restructuring & Debt Obligation Negotiations",
  "Regulatory & Institutional Navigation",
  "Executive Decision Support & Risk Analysis",
  "Joint Venture & Board-Level Alignment",
  "Banking & Post-Lending Dispute Advisory",
  "Insurance Claims Strategy & Negotiation"
];

export const founderPillars = [
  {
    label: "Strategy",
    desc: "Structured preparation before every negotiation."
  },
  {
    label: "Negotiation & Dispute Resolution",
    desc: "Experienced partner at the table — and before it."
  },
  {
    label: "Subject Matter Expertise",
    desc: "Banking, insurance, regulatory, TMT."
  }
];

export const founderCallout =
  "Handling a complex commercial dispute in-house — without a dedicated negotiation specialist — costs far more than the engagement itself. It consumes executive time, creates internal friction, and almost always produces a worse outcome than bringing in someone whose only job is to prepare and negotiate on your behalf.";

// ── CONTACT (PRESERVED - DO NOT MODIFY) ──────────────────────────────────────

export const contact = {
  headline: "Begin a Confidential Conversation.",
  body: "No two disputes are the same, so tell us what's going on and we'll tell you honestly whether we can help. Every conversation is confidential, and you'll be talking directly with Shrivatsan — not a call center.",
  office: "[[ CONFIRM WITH FOUNDER: primary office / engagement geography ]]",
  email: "[[ CONFIRM: direct contact email ]]",
  whatsappDisclaimer:
    "[[ CONFIRM EXACT WORDING WITH FOUNDER — his brief requires a disclaimer stating this contact information may be shared via WhatsApp. ]]",
  confidentialityNote:
    "All communications are held in strict confidence and are not shared with third parties."
};

// ── BOTTOM CTA ────────────────────────────────────────────────────────────────

export const bottomCta = {
  headline: "Ready to Talk Through Your Situation?",
  body: "Get in touch and we'll help you figure out the strongest way forward — before things escalate any further than they need to."
};

export const finalCtaTags = [
  "Strategy",
  "Negotiation & Dispute Resolution",
  "Subject Matter Expertise"
];