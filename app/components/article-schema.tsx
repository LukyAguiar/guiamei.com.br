// ─── ArticleSchema ────────────────────────────────────────────────────────────
// Injeta JSON-LD Article/BlogPosting para rich snippets no Google.
// Uso: <ArticleSchema title="..." description="..." url="..." dateModified="..." />

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
  datePublished?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  dateModified,
  datePublished,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished: datePublished ?? "2026-01-01",
    dateModified: dateModified ?? new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: "MEI/guia",
      url: "https://guiamei.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "MEI/guia",
      url: "https://guiamei.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://guiamei.vercel.app/apple-touch-icon-2.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
