import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

interface LinkButtonProps extends Omit<ButtonProps, 'onClick'> {
  href: string;
  trackLabel?: string;
}

export default function LinkButton({ href, children, trackLabel, ...props }: LinkButtonProps) {
  const [, setLocation] = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Track navigation event if label provided
    if (trackLabel) {
      trackEvent('navigation', 'Button Click', trackLabel);
    }
    setLocation(href);

    // Ensure we land at the top of the destination page
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Button type="button" onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
