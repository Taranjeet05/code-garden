import { articles } from "@/lib/articles";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-green-900 mb-6 text-center">
          Explore Our Articles
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Dive into our insightful articles to learn more about Next.js, performance, reliability, and much more.
        </p>
        <ul className="space-y-6">
          {articles.map((article) => (
            <li key={article.id} className="group hover:bg-green-100 rounded-lg transition duration-300">
              <Link
                href={`/articles/${article.slug}`}
                className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform group-hover:scale-105"
              >
                <h2 className="text-2xl font-semibold text-green-700 group-hover:text-green-900 transition duration-300">
                  {article.title}
                </h2>
                <p className="text-gray-600 mt-2">{article.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
