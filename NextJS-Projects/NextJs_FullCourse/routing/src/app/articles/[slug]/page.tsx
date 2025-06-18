import { articles } from "@/lib/articles";
import Link from "next/link";

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-red-600 text-center">
            Article Not Found!
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Sorry, the article you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl">
        {/* Article Title */}
        <h1 className="text-4xl font-extrabold text-green-900 mb-6 text-center">
          {article.title}
        </h1>

        {/* Article Content */}
        <div className="prose lg:prose-xl text-gray-700">
          <p>{article.content}</p>
        </div>

        {/* Additional Content or Call to Action */}
        <div className="mt-10 text-center">
          <Link
            href="/articles"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Back to Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
