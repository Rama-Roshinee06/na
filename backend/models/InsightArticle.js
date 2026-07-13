// PHASE 2 — not yet imported anywhere. Field names deliberately mirror
// `insights` in frontend/src/data/content.js so that migrating from
// hardcoded content to CMS-driven content is a data copy, not a rewrite.

import mongoose from "mongoose";

const insightArticleSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    category: String,
    title: { type: String, required: true },
    excerpt: String,
    body: String, // full article content — not needed until a detail page exists
    readTime: String,
    published: { type: Boolean, default: false }, // founder approval gate
  },
  { timestamps: true }
);

export default mongoose.model("InsightArticle", insightArticleSchema);
