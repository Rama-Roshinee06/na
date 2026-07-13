// PHASE 2 — not yet imported anywhere. This is the shape that
// Contact.jsx's `form` state (see frontend/src/pages/Contact.jsx)
// already matches, so wiring this up later is a straight mapping.

import mongoose from "mongoose";

const contactSubmissionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    title: String,
    organization: { type: String, required: true },
    email: { type: String, required: true },
    natureOfMatter: String,
    description: String,
    status: { type: String, enum: ["new", "reviewed", "archived"], default: "new" },
  },
  { timestamps: true }
);

export default mongoose.model("ContactSubmission", contactSubmissionSchema);
