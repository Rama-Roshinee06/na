// ============================================================================
// PHASE 2 SCAFFOLD — not yet connected to the frontend.
//
// This exists so the folder structure is ready when you move past the
// approval-demo stage. Nothing here runs as part of Phase 1.
//
// To activate:
//   1. npm install (in this /backend folder)
//   2. Create a .env file with MONGO_URI=<your connection string>
//   3. Uncomment the mongoose.connect() call below
//   4. Wire the frontend's Contact.jsx handleSubmit to POST here instead
//      of console.log
// ============================================================================

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import contactRoutes from "./routes/contact.js";
// import insightsRoutes from "./routes/insights.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/api/contact", contactRoutes);
// app.use("/api/insights", insightsRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", phase: "2-scaffold-not-active" });
});

const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
//   .catch((err) => console.error("MongoDB connection failed:", err));

app.listen(PORT, () => console.log(`Server running on ${PORT} (Mongo not yet connected)`));
