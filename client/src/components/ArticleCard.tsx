import { Article } from "@/config/realEstateArticles";
import { Link } from "wouter";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  // Get first paragraph as preview
  const previewText = article.content[0];
  const articleUrl = `/realestate/${article.slug}`;

  return (
    <div
      className="rounded-lg border border-border p-6 shadow-sm"
      style={{ background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE8F0 100%)' }}
      data-testid={`card-${article.id}`}
    >
      <h3 className="text-lg font-bold font-display text-foreground mb-3">
        <Link
          href={articleUrl}
          className="hover:text-primary transition-colors"
        >
          {article.title}
        </Link>
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {previewText}
      </p>
      <Link
        href={articleUrl}
        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors underline"
        data-testid={`button-read-more-${article.id}`}
      >
        Read more
      </Link>
    </div>
  );
}
