import { Domain } from "@shared/schema";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface DomainCardProps {
  domain: Domain;
}

export default function DomainCard({ domain }: DomainCardProps) {
  return (
    <Card className="overflow-hidden" data-testid={`card-domain-${domain.name}`}>
      {domain.imageUrl && (
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <img
            src={domain.imageUrl}
            alt={domain.name}
            className="object-cover w-full h-full"
          />
        </div>
      )}
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
