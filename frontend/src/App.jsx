import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirect sub-routes to home page anchors for single-page compatibility */}
          <Route path="/about" element={<Navigate to="/#about" replace />} />
          <Route path="/services" element={<Navigate to="/#services" replace />} />
          <Route path="/industries" element={<Navigate to="/#industries" replace />} />
          <Route path="/scenarios" element={<Navigate to="/#scenarios" replace />} />
          <Route path="/insights" element={<Navigate to="/#insights" replace />} />
          <Route path="/founder" element={<Navigate to="/#founder" replace />} />
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          {/* Fallback to root */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
