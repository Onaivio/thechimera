interface SectionHeaderProps {
  label: string;
  className?: string;
}

export function SectionHeader({ label, className = "" }: SectionHeaderProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 px-4 py-2 border border-foreground/20 rounded-full ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-foreground" />
      <span className="text-sm tracking-wider uppercase">{label}</span>
    </div>
  );
}
