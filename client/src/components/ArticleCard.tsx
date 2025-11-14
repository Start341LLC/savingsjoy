import { Article } from "@/config/realEstateArticles";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  article: Article;
}

// Helper function to parse **bold** syntax
function parseBoldText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <strong key={index}>{boldText}</strong>;
    }
    return part;
  });
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Get first paragraph as preview
  const previewText = article.content[0];

  return (
    <>
      <div 
        className="rounded-lg border border-border p-6 shadow-sm"
        style={{ background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE8F0 100%)' }}
        data-testid={`card-${article.id}`}
      >
        <h3 className="text-lg font-bold font-display text-foreground mb-3">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {previewText}
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors cursor-pointer underline"
          data-testid={`button-read-more-${article.id}`}
        >
          Read more
        </button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-display">
              {article.title}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div className="space-y-4 mt-4">
              {article.content.map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-sm text-foreground leading-relaxed"
                  data-testid={`text-article-${article.id}-p${index}`}
                >
                  {parseBoldText(paragraph)}
                </p>
              ))}
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
