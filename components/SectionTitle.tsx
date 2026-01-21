// components/SectionTitle.tsx

export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
      <h1
        className="uppercase"
        style={{
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          fontWeight: 700,
          fontSize: "clamp(3rem, 8vw, 7rem)",
          lineHeight: 1,
          letterSpacing: "0.01em",
          marginBottom: "2rem",
        }}
      >
        {children}
      </h1>
    );
  }
  