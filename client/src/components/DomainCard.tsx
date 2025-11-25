import { Domain } from "@shared/schema";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const gradientPalette = [
  "from-primary/15 via-white to-accent/25",
  "from-amber-50 via-white to-primary/20",
  "from-rose-50 via-white to-orange-50",
  "from-indigo-50 via-white to-primary/10",
];

function getGradient(name: string) {
  const score = name.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return gradientPalette[score % gradientPalette.length];
}

interface DomainCardProps {
  domain: Domain;
}

export default function DomainCard({ domain }: DomainCardProps) {
  return (
    <Card className="overflow-hidden" data-testid={`card-domain-${domain.name}`}>
      <div className={`relative h-48 bg-gradient-to-br ${getGradient(domain.name)} overflow-hidden`}>
        {domain.imageUrl ? (
          <img
            src={domain.imageUrl}
            alt={domain.name}
            className="object-cover w-full h-full"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
            <div className="h-12 w-12 rounded-full bg-white/70 flex items-center justify-center text-2xl font-semibold text-primary shadow-sm">
              {domain.name.charAt(0).toUpperCase()}
            </div>
            <span className="text-xs font-medium tracking-wide uppercase text-foreground/70">
              {domain.category}
            </span>
          </div>
        )}
      </div>
      <CardHeader className="pb-3">
        <h3
          className="text-xl font-bold font-display text-foreground leading-tight break-words"
          data-testid={`text-domain-name-${domain.name}`}
        >
          {domain.name}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-domain-description-${domain.name}`}>
          {domain.description}
        </p>
      </CardContent>
    </Card>
  );
}
