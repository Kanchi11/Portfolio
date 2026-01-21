export function SideText({ text, side }: { text: string; side: "left" | "right" }) {
    return (
      <div
        className={`fixed ${side === "left" ? "left-3" : "right-3"} top-1/2 -translate-y-1/2 z-50 pointer-events-none`}
      >
        <div
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-black"
        >
          {text}
        </div>
      </div>
    );
  }
  