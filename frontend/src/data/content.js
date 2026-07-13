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

export const founder = {
  name: "Shrivatsan Balagopal",
  title: "Founder & Principal",
  tagline:
    "Strategic Negotiation Advisor | Commercial Resolution Specialist | Executive Decision Support",
  bio: [
    "Shrivatsan Balagopal serves as a trusted strategic advisor to corporate leaders, boards, and general counsel facing complex commercial challenges, high-value disputes, and institutional deadlocks.",
    "Drawing on extensive experience across banking, insurance, telecommunications, and highly regulated environments, he provides objective decision support and strategic negotiation expertise to resolve complex matters before they escalate to litigation.",
    "His work focuses on high-value commercial claims, post-lending obligations, regulatory interactions, and restructuring negotiations where disciplined strategy, structured preparation, and commercial objectivity are critical."
  ],
  philosophy:
    "We believe the strongest negotiations are not won through confrontation, but through preparation, objectivity, and disciplined commercial thinking. Successful outcomes emerge when organizations understand interests — not merely positions — and engage stakeholders through informed strategy rather than emotion."
};

export const brand = {
  name: "Neutral Advisory",
  subtitle: "Strategic Negotiation & Commercial Resolution Advisory",
  positioningStatement:
    "Neutral Advisory is an independent strategic negotiation and commercial resolution advisory firm helping organizations negotiate, navigate, and resolve high-stakes commercial challenges involving financial institutions, insurers, regulators, and complex stakeholder environments."
};

export const hero = {
  headline: "We Help Executives Resolve Commercial Disputes Before They Become Litigation",
  body:
    "Neutral Advisory provides independent strategic negotiation and decision support for corporate executives, boards, and general counsel facing high-stakes institutional disputes and commercial conflicts.",
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
  body: "We believe that successful negotiations are built on facts, preparation, and disciplined commercial thinking — not confrontation. Our approach emphasizes objectivity, structured preparation weeks before the first meeting, and analyzing underlying business interests rather than entrenched legal positions. This methodology enables executive leaders to make informed decisions that protect corporate value and preserve critical relationships."
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
  body: "We partner with decision-makers who require objective counsel to navigate complex commercial disputes and institutional impasses.",
  audiences: [
    {
      title: "Corporate Executives & C-Suite",
      body: "For CEOs, CFOs, and business leaders managing high-stakes disputes where commercial continuity and value preservation are critical."
    },
    {
      title: "General Counsel",
      body: "For chief legal officers seeking a strategic, commercially focused negotiation path to resolve disputes before committing to costly litigation."
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
      body: "We conduct a rapid, confidential assessment of the dispute context, historical relationships, and stakeholder positions."
    },
    {
      step: "02",
      title: "Assess",
      body: "We analyze the underlying commercial interests, financial exposures, and operational risks of all involved parties."
    },
    {
      step: "03",
      title: "Strategize",
      body: "We formulate a structured negotiation strategy, including scenario modeling, leverage analysis, and messaging frameworks."
    },
    {
      step: "04",
      title: "Resolve",
      body: "We advise executives in real-time throughout the engagement to execute the strategy, break impasses, and secure agreements."
    }
  ]
};

export const whyNeutral = [
  {
    title: "Independent Counsel",
    body: "Operating free from corporate or banking conflicts, ensuring unbiased risk assessments and objective strategic options."
  },
  {
    title: "Discreet Engagement",
    body: "Strict confidentiality protocols protect your organization's reputation and commercial positions throughout negotiations."
  },
  {
    title: "Commercially Focused",
    body: "Structured strategies designed to align competing stakeholders and resolve deadlocks before they trigger litigation expenses."
  },
  {
    title: "Founder-Led Advisory",
    body: "Every engagement is directly led and executed by Shrivatsan Balagopal, providing senior-level counsel at every phase."
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
    challenge: "Escalating contract disagreements and commercial deadlocks threatening joint ventures or critical business relationships.",
    role: "Formulating strategic negotiation postures, analyzing stakeholder leverage, and facilitating communication pathways.",
    outcome: "Sustainable commercial resolutions achieved quietly, bypassing public courts and preserving key partner relationships."
  },
  {
    title: "Executive Negotiation Strategy",
    challenge: "High-value business negotiations where leverage is misidentified and structural preparation is lacking.",
    role: "Providing scenario planning, prepared positioning, and real-time decision-support modeling for leadership teams.",
    outcome: "Optimized negotiation outcomes and aligned boardroom expectations under pressurized conditions."
  },
  {
    title: "Stakeholder Alignment",
    challenge: "Conflicting priorities among boards, lenders, insurers, and key partners stalling critical corporate actions.",
    role: "Designing structured negotiation frameworks to identify shared economic interests and bridge impasses.",
    outcome: "Board and stakeholder consensus secured, restoring corporate momentum and path forward."
  },
  {
    title: "Pre-Litigation Resolution",
    challenge: "Imminent threat of costly, public, and prolonged court proceedings draining executive resources.",
    role: "Developing and executing out-of-court settlement strategies and disciplined executive communications.",
    outcome: "Disputes settled discreetly and efficiently, protecting corporate value and avoiding legal exposure."
  },
  {
    title: "Board-Level Conflict Support",
    challenge: "Sensitive governance impasses, founder disagreements, or strategic direction deadlocks.",
    role: "Acting as an independent, objective advisor to analyze leverage, interest alignment, and settlement pathways.",
    outcome: "Governance deadlock resolved and constructive executive decision-making re-established."
  },
  {
    title: "Insurance & Contract Dispute Advisory",
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
      "Strategic navigation of complex regulatory frameworks, multi-stakeholder disputes, and state-owned entity interactions."
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
      question: "How do you work with our existing legal counsel?",
      answer: "We operate in tandem with your external and in-house legal teams. While legal counsel manages litigation strategy and legal positioning, Neutral Advisory focuses on commercial negotiation strategy, economic interest analysis, and structuring out-of-court resolutions."
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
  body: "Every commercial situation is different. Whether your organization is preparing for a significant negotiation, navigating a complex institutional challenge, or seeking an independent strategic perspective, Neutral Advisory offers confidential, founder-led advisory tailored to your commercial objectives.",
  office: "[[ CONFIRM WITH FOUNDER: primary office / engagement geography ]]",
  email: "[[ CONFIRM: direct contact email ]]",
  whatsappDisclaimer:
    "[[ CONFIRM EXACT WORDING WITH FOUNDER — his brief requires a disclaimer stating this contact information may be shared via WhatsApp. Do not invent legal/compliance language yourself. ]]",
  confidentialityNote:
    "All communications are held in strict confidence and are not shared with third parties."
};
