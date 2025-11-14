import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";
import LinkButton from "@/components/LinkButton";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <SEO 
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        keywords={['404', 'not found', 'error']}
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground mb-6">
            The page you're looking for doesn't exist. Please check the URL or return to the homepage.
          </p>
          
          <LinkButton 
            href="/" 
            className="w-full"
            trackLabel="404 - Return Home"
            data-testid="button-return-home"
          >
            Return to Homepage
          </LinkButton>
        </CardContent>
      </Card>
    </div>
  );
}
