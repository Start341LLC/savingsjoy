import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
}

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | ${siteConfig.name}`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update meta keywords if provided
    if (keywords && keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords.join(", "));
    }

    // Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute("content", content);
    };

    updateOGTag("og:title", title);
    updateOGTag("og:description", description);
    updateOGTag("og:site_name", siteConfig.name);
    updateOGTag("og:url", `${siteConfig.url}${window.location.pathname}`);
  }, [title, description, keywords]);

  return null;
}
