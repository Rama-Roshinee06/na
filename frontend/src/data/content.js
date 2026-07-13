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
    "Shrivatsan Balagopal serves as a trusted advisor to executives, founders, and boards navigating commercially significant negotiations, institutional challenges, and complex stakeholder disputes.",
    "With extensive experience across banking, insurance, telecommunications, and highly regulated business environments, he provides objective decision support and strategic negotiation expertise to resolve complex matters before they escalate to litigation.",
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
  headline: "Resolving Complex Commercial Disputes Before Litigation",
  body:
    "Neutral Advisory provides independent strategic negotiation and decision support for corporate executives, boards, and general counsel facing high-stakes institutional disputes and commercial conflicts.",
  primaryCta: "Schedule a Confidential Consultation",
  secondaryCta: "Learn Our Approach"
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
  headline: "Objective Thinking Creates Better Commercial Outcomes.",
  body: [
    "Commercial negotiations often become difficult not because solutions are unavailable, but because stakeholders become entrenched in positions rather than interests.",
    "Neutral Advisory helps organizations negotiate with clarity, structure, and commercial discipline — enabling informed decisions that preserve business value and support sustainable outcomes."
  ]
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
      title: "Understand the Situation",
      body: "We conduct a rapid, confidential assessment of the dispute, mapping the history, key stakeholders, and institutional context."
    },
    {
      step: "02",
      title: "Analyze Interests & Risks",
      body: "We look beyond formal legal positions to identify the underlying commercial interests, financial exposures, and operational risks of all parties."
    },
    {
      step: "03",
      title: "Develop Executive Strategy",
      body: "We formulate a structured negotiation strategy, including leverage analysis, messaging frameworks, and decision-support modeling for leadership."
    },
    {
      step: "04",
      title: "Support Resolution",
      body: "We advise executives throughout the engagement, providing real-time strategic counsel to break impasses and secure sustainable commercial agreements."
    }
  ]
};

export const whyNeutral = [
  {
    title: "Confidential Engagements",
    body: "We operate with absolute discretion, protecting your organization's reputation and commercial positions."
  },
  {
    title: "Founder-Led Advisory",
    body: "Every engagement receives the direct, personal attention and deep commercial expertise of Shrivatsan Balagopal."
  },
  {
    title: "Independent Perspective",
    body: "Free from institutional conflicts, we provide objective, unbiased analysis of your negotiation leverage and risks."
  },
  {
    title: "Commercial Expertise",
    body: "We focus on business-centric resolutions that prioritize financial value and operational continuity over legal posturing."
  },
  {
    title: "Strategic Negotiation Framework",
    body: "Our methodology is built on rigorous analysis of interests, systematic preparation, and disciplined communication strategy."
  },
  {
    title: "Executive Decision Support",
    body: "We equip boards and C-suite leaders with the clear frameworks and scenario modeling needed to make high-stakes decisions."
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
    body: "Independent, strategic analysis and guidance for resolving complex, multi-party commercial conflicts outside of adversarial proceedings."
  },
  {
    title: "Executive Negotiation Strategy",
    body: "Structured preparation, scenario planning, and real-time decision support for high-value business negotiations."
  },
  {
    title: "Stakeholder Alignment",
    body: "Facilitating consensus and resolving deadlocks among boards, lenders, shareholders, and joint venture partners."
  },
  {
    title: "Pre-Litigation Resolution",
    body: "Designing and executing structured negotiation pathways to settle business-critical disputes before they escalate to public court battles."
  },
  {
    title: "Board-Level Conflict Support",
    body: "Objective advisory for corporate boards, founders, and managing directors facing sensitive internal governance or strategic impasses."
  },
  {
    title: "Insurance & Contract Dispute Advisory",
    body: "Strategic advocacy and negotiation support for resolving high-value commercial insurance claims and complex contract performance disagreements."
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
    id: "why-ceos-lose-before-entering-room",
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
    category: "Executive Insight",
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
