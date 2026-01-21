// components/TwoColumn.tsx

export function TwoColumn({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
      <div className="text-base md:text-lg leading-relaxed">
        {left}
      </div>

      <div>{right}</div>
    </div>
  );
}
