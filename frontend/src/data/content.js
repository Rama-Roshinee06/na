// ============================================================================
// SINGLE SOURCE OF TRUTH for site content.
//
// WHY THIS FILE EXISTS (read this before editing anything):
// In Phase 1, this file IS the "database" — every page imports from here
// instead of hardcoding text inline. That means:
//   1. You can hand this ONE file to the founder for content review,
//      instead of hunting through 8 page components.
//   2. When Phase 2 adds a real backend, this is exactly the shape the
//      MongoDB documents / admin CMS form fields will take. Nothing here
//      gets thrown away — it gets migrated.
//
// FLAGGED ITEMS: anything wrapped in [[ ]] is a placeholder that must be
// confirmed with the founder before this goes live. Do not quietly resolve
// these yourself — that was the mistake in the AI-generated wireframe.
// ============================================================================
export const industriesIntro = {
  eyebrow: "Industry Focus",
  headline: "Advisory Coverage Across Regulated Environments",
  body: "Neutral Advisory provides targeted negotiation and resolution guidance across highly specialized commercial sectors."
};
export const servicesIntro = {
  eyebrow: "Advisory Engagements",
  headline: "Strategic Advisory for Complex Commercial Disputes",
  body: "We structure our advisory engagements around risk preemption, board alignment, and value protection."
};
export const founder = {
  name: "Shrivatsan Balagopal",
  title: "Founder & Principal",
  tagline:
    "Strategic Negotiation Advisor | Commercial Resolution Specialist | Executive Decision Support",
  bio: [
    "Shrivatsan works directly with corporate leaders, boards, and legal teams when a commercial dispute has gotten complicated enough that they need someone outside the building to help think it through.",
    "His background spans banking, insurance, and telecom — sectors where the stakes are high and the regulatory environment leaves little room for error. That experience shapes how he reads a dispute and where he looks for the path out of it.",
    "His work today focuses on high-value commercial claims, post-lending disputes, regulatory friction, and restructuring negotiations — situations where discipline and a clear head matter more than posturing."
  ],
  philosophy:
    "I've never seen a negotiation won by being the loudest person in the room. The ones that go well are won beforehand — by understanding what the other side actually needs, not just what they're asking for."
};

export const brand = {
  name: "Neutral Advisory",
  subtitle: "Strategic Negotiation & Commercial Resolution Advisory",
  positioningStatement:
    "Neutral Advisory helps executives and boards work through high-stakes commercial disputes — with banks, insurers, regulators, or each other — before they turn into lawsuits."
};

export const hero = {
  headline: "We Help Executives Resolve Commercial Disputes Before They Become Litigation",
  body:
    "When a commercial dispute threatens to become a lawsuit, we step in — working directly with executives, boards, and legal teams to find a way through it before it costs you the relationship, the reputation, or the money.",
  primaryCta: "Schedule a Confidential Consultation",
  secondaryCta: "View Our Approach"
};

export const pillars = [
  {
    title: "Negotiate",
    body: "Develop structured negotiation strategies for commercially significant matters."
  },
  {
    title: "Navigate",
    body: "Work through institutional complexity involving financial institutions, insurers, regulators, and other key stakeholders."
  },
  {
    title: "Resolve",
    body: "Achieve commercially sustainable outcomes through disciplined engagement and strategic negotiation."
  }
];

export const philosophy = {
  eyebrow: "Our Philosophy",
  headline: "Discipline, Preparation, and Objectivity",
  body: "Most negotiations are lost weeks before anyone sits down at the table — not because of a weak position, but because no one prepared properly. We do the groundwork early: understanding what's actually driving the other side, not just what they're demanding, so you walk in ready instead of reactive."
};

export const whenToEngage = [
  "Banking and lending disputes involving post-closure obligations or documentation.",
  "Complex insurance claim negotiations.",
  "Commercial disagreements where negotiations have reached an impasse.",
  "Regulatory or institutional challenges affecting business operations.",
  "High-value commercial settlements requiring structured negotiation.",
  "Multi-stakeholder negotiations where strategic coordination is essential."
];

export const whoWeServe = {
  eyebrow: "Who We Serve",
  headline: "Tailored Advisory for Executive Leaders",
  body: "We partner with decision-makers who require objective guidance to navigate complex commercial disputes and institutional impasses.",
  audiences: [
    {
      title: "Corporate Executives & C-Suite",
      body: "For CEOs, CFOs, and business leaders managing high-stakes disputes where commercial continuity and value preservation are critical."
    },
    {
      title: "Legal Leadership",
      body: "For chief legal officers and legal leadership seeking a strategic, commercially focused negotiation path to resolve disputes before committing to costly litigation."
    },
    {
      title: "Boards & Founders",
      body: "For board members, founders, and key stakeholders facing internal deadlocks, restructuring challenges, or critical institutional interactions."
    }
  ]
};

export const processSteps = {
  eyebrow: "Our Process",
  headline: "A Disciplined Framework for Resolution",
  steps: [
    {
      step: "01",
      title: "Understand",
      body: "We start with a fast, confidential read on the dispute — the history, the relationships, and where everyone actually stands."
    },
    {
      step: "02",
      title: "Assess",
      body: "Then we dig into what's really at stake: the commercial interests, the financial exposure, the risk each side is carrying."
    },
    {
      step: "03",
      title: "Strategize",
      body: "From there, we build the actual game plan — how to approach the room, what leverage exists, how to open the conversation."
    },
    {
      step: "04",
      title: "Resolve",
      body: "And we stay in it with you, advising in real time as things move, so impasses get broken and agreements get signed."
    }
  ]
};

export const whyNeutralIntro = "No banking ties, no law firm politics, no conflicts of interest — just a clear-eyed read on your situation and a plan to get through it.";

export const whyNeutral = [
  {
    title: "Independent Advisor",
    body: "We're not tied to a bank, a law firm, or an insurer, so the read you get is the real one — not one shaped by who else is paying us."
  },
  {
    title: "Discreet Engagement",
    body: "What's discussed stays discussed. Every engagement is handled under strict confidentiality, protecting your position at the table and your reputation outside it."
  },
  {
    title: "Commercially Focused",
    body: "We build negotiation strategy around the business outcome you actually need, not the fight itself. The goal is resolution, not a longer, more expensive standoff."
  },
  {
    title: "Founder-Led Advisory",
    body: "You work directly with Shrivatsan on every engagement, not a junior team. Senior judgment, from day one to close."
  }
];

export const about = {
  eyebrow: "About Neutral Advisory",
  headline: "Strategy Before Escalation.",
  body: [
    "Many commercial disputes become unnecessarily prolonged because they begin without a structured negotiation strategy.",
    "Neutral Advisory was established to provide organizations with independent strategic advice before commercial disagreements evolve into expensive legal, operational, or reputational challenges."
  ],
  principles: ["Objectivity", "Commercial Thinking", "Structured Negotiation"],
  whyNeutralName:
    "Neutral represents an objective perspective. We believe successful negotiations are built on facts, preparation, commercial understanding, and disciplined execution — not emotion or confrontation. Being neutral enables better analysis, stronger negotiation strategy, and more sustainable commercial outcomes."
};

export const services = [
  {
    title: "Commercial Dispute Advisory",
    summary: "Resolve complex commercial disputes while preserving enterprise value and long-term business relationships.",
    focus: [
      "Contract disputes",
      "Joint venture conflicts",
      "Executive negotiations",
      "Stakeholder alignment"
    ],
    impact: "Faster resolution with stronger commercial relationships.",
    challenge: "Escalating contract disagreements and commercial deadlocks threatening joint ventures or critical business relationships.",
    role: "Formulating strategic negotiation postures, analyzing stakeholder leverage, and facilitating communication pathways.",
    outcome: "Sustainable commercial resolutions achieved quietly, bypassing public courts and preserving key partner relationships."
  },
  {
    title: "Executive Negotiation Strategy",
    summary: "Shape high-value negotiation strategy so leadership can act with confidence under pressure.",
    focus: [
      "Leverage assessment",
      "Board alignment",
      "Negotiation readiness",
      "Real-time decision support"
    ],
    impact: "Clear posture and better outcomes in critical executive negotiations.",
    challenge: "High-value business negotiations where leverage is misidentified and structural preparation is lacking.",
    role: "Providing scenario planning, prepared positioning, and real-time decision-support modeling for leadership teams.",
    outcome: "Optimized negotiation outcomes and aligned boardroom expectations under pressurized conditions."
  },
  {
    title: "Stakeholder Alignment",
    summary: "Align stakeholders and restore momentum in high-stakes initiatives that have stalled.",
    focus: [
      "Board consensus",
      "Lender coordination",
      "Partner engagement",
      "Shared economic interests"
    ],
    impact: "Consensus-driven decisions that keep complex initiatives moving.",
    challenge: "Conflicting priorities among boards, lenders, insurers, and key partners stalling critical corporate actions.",
    role: "Designing structured negotiation frameworks to identify shared economic interests and bridge impasses.",
    outcome: "Board and stakeholder consensus secured, restoring corporate momentum and path forward."
  },
  {
    title: "Pre-Litigation Resolution",
    summary: "Resolve disputes discreetly before they escalate to litigation and protect corporate value.",
    focus: [
      "Settlement strategy",
      "Confidential execution",
      "Executive communications",
      "Risk mitigation"
    ],
    impact: "Discreet, efficient resolutions that avoid legal escalation.",
    challenge: "Imminent threat of costly, public, and prolonged court proceedings draining executive resources.",
    role: "Developing and executing out-of-court settlement strategies and disciplined executive communications.",
    outcome: "Disputes settled discreetly and efficiently, protecting corporate value and avoiding legal exposure."
  },
  {
    title: "Board-Level Conflict Support",
    summary: "Help boards and founders move past governance deadlock with focused independent advisory support.",
    focus: [
      "Governance deadlock",
      "Interest analysis",
      "Stakeholder mediation",
      "Decision clarity"
    ],
    impact: "Constructive board-level decisions without prolonging internal conflict.",
    challenge: "Sensitive governance impasses, founder disagreements, or strategic direction deadlocks.",
    role: "Acting as an independent, objective advisor to analyze leverage, interest alignment, and settlement pathways.",
    outcome: "Governance deadlock resolved and constructive executive decision-making re-established."
  },
  {
    title: "Insurance & Contract Dispute Advisory",
    summary: "Manage insurance and contract disputes with disciplined positioning and focused claim strategy.",
    focus: [
      "Policy interpretation",
      "Claims negotiation",
      "Multi-party coordination",
      "Recovery maximization"
    ],
    impact: "Stronger claim outcomes with minimized operational disruption.",
    challenge: "Significant commercial insurance claim disputes, coverage denials, or contract performance impasses.",
    role: "Analyzing complex policy terms, coordinating multi-party claim positioning, and leading settlement discussions.",
    outcome: "Claim recovery maximized and contract performance disputes settled with minimal operational disruption."
  }
];

export const industries = [
  {
    title: "Banking & Financial Services",
    items: [
      "Commercial lending and loan closure processes",
      "Security documentation disputes",
      "Post-settlement obligations",
      "Restructuring and institutional negotiations"
    ]
  },
  {
    title: "Insurance & Risk Management",
    items: [
      "Commercial property and casualty claims",
      "Claims settlement negotiations",
      "Coverage interpretation and disputes",
      "Institutional insurer engagement"
    ]
  },
  {
    title: "Telecommunications & Technology",
    items: [
      "Commercial contract disputes",
      "Regulatory environments and positioning",
      "Enterprise contract negotiations",
      "Infrastructure and joint venture disputes"
    ]
  },
  {
    title: "Highly Regulated Sectors",
    items: [
      "Regulatory compliance navigation",
      "Multi-stakeholder dispute coordination",
      "State-owned entity negotiations",
      "Compliance-critical commercial contracts"
    ]
  }
];

export const scenarios = [
  {
    title: "Post-Closure Banking Obligations",
    body: "A company has completed repayment of its borrowing facilities. Months later, unresolved documentation, security release requirements, and institutional processes continue to delay closure. Neutral Advisory helps develop a structured engagement strategy, align stakeholders, clarify obligations, and negotiate an efficient commercial resolution."
  },
  {
    title: "Commercial Insurance Claims",
    body: "A business experiences a significant operational loss and submits an insurance claim. Differences emerge regarding policy interpretation, claim valuation, supporting documentation, and settlement timelines. Neutral Advisory supports management by developing negotiation strategies, preparing commercial positions, coordinating stakeholder engagement, and facilitating constructive settlement discussions."
  },
  {
    title: "High-Value Commercial Negotiations",
    body: "An organization is engaged in negotiations where commercial relationships remain important despite significant disagreement over contractual obligations. Neutral Advisory assists leadership teams in identifying negotiation pathways that preserve commercial value while progressing toward practical resolution."
  },
  {
    title: "Regulatory & Institutional Challenges",
    body: "A business encounters prolonged delays arising from complex regulatory or institutional processes affecting commercial operations. Neutral Advisory helps organizations structure engagement, prepare strategic communications, and navigate institutional environments more effectively."
  },
  {
    title: "Multi-Stakeholder Commercial Deadlocks",
    body: "Projects involving lenders, insurers, customers, suppliers, consultants, or regulators often reach a point where progress stalls because each stakeholder has competing priorities. Neutral Advisory develops negotiation frameworks that identify common interests, manage stakeholder expectations, and facilitate commercially viable outcomes."
  },
  {
    title: "Executive Negotiation Support",
    body: "Business leaders are often required to negotiate under significant financial, operational, or reputational pressure. Neutral Advisory provides confidential strategic advice before and throughout critical negotiations, enabling informed decisions and disciplined execution."
  }
];

export const faq = {
  eyebrow: "Frequently Asked Questions",
  headline: "Clarity on Our Engagement Model",
  items: [
    {
      question: "How do you work with our existing legal team?",
      answer: "We operate in tandem with your external and in-house legal teams. While legal teams manage litigation strategy and legal positioning, Neutral Advisory focuses on commercial negotiation strategy, economic interest analysis, and structuring out-of-court resolutions."
    },
    {
      question: "At what stage should we engage Neutral Advisory?",
      answer: "Early engagement yields the greatest strategic flexibility. Ideally, we are engaged when a commercial disagreement first emerges, before formal litigation begins or before negotiations reach a complete deadlock."
    },
    {
      question: "How are conflicts of interest managed?",
      answer: "As an independent advisory firm, we conduct rigorous conflict checks prior to any engagement. We do not provide legal representation, which allows us to maintain strict independence and focus solely on commercial resolution."
    },
    {
      question: "Is the initial consultation confidential?",
      answer: "Yes. All preliminary discussions, inquiries, and consultations are protected by strict confidentiality, regardless of whether a formal advisory engagement is established."
    }
  ]
};

export const insightsIntro = "Notes on negotiation, dispute strategy, and the mistakes we see executives make most often.";

export const insights = [
  {
    id: "why-ceos-lose-entering-room",
    category: "Negotiation Strategy",
    title: "Why Most CEOs Lose Before They Enter the Room",
    excerpt:
      "The most consequential negotiation preparation happens weeks before the first meeting — and most executives skip it entirely.",
    readTime: "7 min read",
    status: "DRAFT — not yet approved by founder"
  },
  {
    id: "hidden-cost-of-escalation",
    category: "Commercial Disputes",
    title: "The Hidden Cost of Escalation",
    excerpt:
      "Escalating a commercial dispute to adversarial proceedings rarely produces better outcomes. Here is what does.",
    readTime: "5 min read",
    status: "DRAFT — not yet approved by founder"
  },
  {
    id: "leverage-is-not-what-you-think",
    category: "Executive Leadership",
    title: "Leverage Is Not What You Think It Is",
    excerpt:
      "Founders and executives consistently misidentify their own leverage — and systematically underestimate their counterpart's. A framework for clarity.",
    readTime: "9 min read",
    status: "DRAFT — not yet approved by founder"
  }
];

export const contact = {
  headline: "Begin a Confidential Conversation.",
  body: "No two disputes are the same, so tell us what's going on and we'll tell you honestly whether we can help. Every conversation is confidential, and you'll be talking directly with Shrivatsan — not a call center.",
  office: "[[ CONFIRM WITH FOUNDER: primary office / engagement geography ]]",
  email: "[[ CONFIRM: direct contact email ]]",
  whatsappDisclaimer:
    "[[ CONFIRM EXACT WORDING WITH FOUNDER — his brief requires a disclaimer stating this contact information may be shared via WhatsApp. Do not invent legal/compliance language yourself. ]]",
  confidentialityNote:
    "All communications are held in strict confidence and are not shared with third parties."
};

export const bottomCta = {
  headline: "Ready to Talk Through Your Situation?",
  body: "Get in touch and we'll help you figure out the strongest way forward — before things escalate any further than they need to."
};
