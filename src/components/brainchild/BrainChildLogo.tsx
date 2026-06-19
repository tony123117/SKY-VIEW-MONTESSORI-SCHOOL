// Drop-in replacement for BrainChildLogo.tsx
// Renders: SKY · VIEW (left-aligned) with tagline below — matching the screenshot exactly
export default function BrainChildLogo() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1, userSelect: "none" }}>
      {/* SKY · VIEW */}
      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <span style={{
          fontSize: "1.45rem",
          fontWeight: 900,
          color: "#1a1a1a",
          letterSpacing: "-0.01em",
          fontFamily: "var(--font-heading, sans-serif)",
        }}>
          SKY
        </span>
        <span style={{
          margin: "0 4px",
          color: "#FF6B9D",
          fontSize: "1.45rem",
          fontWeight: 900,
          lineHeight: 1,
        }}>
          ·
        </span>
        <span style={{
          fontSize: "1.45rem",
          fontWeight: 900,
          color: "#FF6B9D",
          letterSpacing: "-0.01em",
          fontFamily: "var(--font-heading, sans-serif)",
        }}>
          VIEW
        </span>
      </div>

      {/* Tagline */}
      <p style={{
        margin: "3px 0 0",
        fontSize: "0.58rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.22em",
        color: "rgba(0,0,0,0.42)",
        whiteSpace: "nowrap",
        fontFamily: "var(--font-body, sans-serif)",
      }}>
        Nursery · Primary · Secondary
      </p>
    </div>
  );
}