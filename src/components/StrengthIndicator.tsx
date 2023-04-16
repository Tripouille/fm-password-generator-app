const MAP_STRENGTH_TO_LABEL = {
  0: "",
  1: "TOO WEAK!",
  2: "WEAK",
  3: "MEDIUM",
  4: "STRONG",
} as const;

export interface StrengthIndicatorProps {
  strength: 0 | 1 | 2 | 3 | 4;
}

export const StrengthIndicator = ({ strength }: StrengthIndicatorProps) => {
  return (
    <div className="h flex w-full items-center justify-between bg-gray-darkest px-4 py-[0.875rem]">
      <p className="font-bold leading-snug text-gray-base">STRENGTH</p>
      <div className="flex items-center gap-4">
        <p className="text-lg">{MAP_STRENGTH_TO_LABEL[strength]}</p>
        <div
          role="img"
          aria-label="strength indicator"
          data-strength={strength}
          className="group flex h-7 gap-2
          [&>div[data-state=active]]:border-transparent
          [&>div]:h-full
          [&>div]:w-[0.625rem]
          [&>div]:border-2
          [&>div]:border-cream
          [&[data-strength='1']>div[data-state=active]]:bg-red
          [&[data-strength='2']>div[data-state=active]]:bg-orange
          [&[data-strength='3']>div[data-state=active]]:bg-yellow
          [&[data-strength='4']>div[data-state=active]]:bg-green"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              data-state={i + 1 <= strength ? "active" : "inactive"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
