import { articles } from "@/lib/articles";
//import { Articles } from "@/types/articles";

export async function generateStaticParams() {
  // This function will generate the dynamic paths at build time
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  // Find the article by the slug
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    return (
      <div>
        <h1>Article Not Found</h1>
        <p>The article you are looking for doesn&apos;t exist.</p>
      </div>
    );
  }

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}
