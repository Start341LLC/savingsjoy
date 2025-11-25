import { cn } from "@/lib/utils";

type LogoSize = "sm" | "md";

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-10 w-10 text-xl",
  md: "h-12 w-12 text-2xl",
};

interface PiggyLogoProps {
  size?: LogoSize;
}

export function PiggyLogo({ size = "md" }: PiggyLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-gradient-to-br from-primary/25 via-white to-accent/30",
        "border border-primary/20 shadow-sm text-primary",
        sizeClasses[size],
      )}
      aria-hidden="true"
    >
      🐷
    </div>
  );
}

