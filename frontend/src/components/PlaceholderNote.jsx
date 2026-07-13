export default function PlaceholderNote({ children }) {
  return (
    <div className="placeholder-note" style={{ fontStyle: "italic", fontSize: "0.9rem", color: "var(--text-body)" }}>
      <strong>Note:</strong> {children}
    </div>
  );
}
