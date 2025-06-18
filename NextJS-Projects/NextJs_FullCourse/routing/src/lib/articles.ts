export const articles = [
  {
    id: 1,
    slug: "nextjs-routing",
    title: "Next.js Routing",
    excerpt:
      "Next.js uses a powerful file-based routing system that allows you to create routes with ease...",
    content:
      "Next.js uses a powerful file-based routing system that allows you to create routes with ease. You can create pages by simply adding files to the pages directory, and dynamic routes can be created with file names like [slug].js.",
  },
  {
    id: 2,
    slug: "server-components",
    title: "Server Components in Next.js",
    excerpt:
      "Server components are an exciting feature in Next.js that allow you to render parts of your app on the server...",
    content:
      "Server components are an exciting feature in Next.js that allow you to render parts of your app on the server. This feature improves performance by sending less JavaScript to the browser while still enabling dynamic rendering on the server-side.",
  },
  {
    id: 3,
    slug: "dynamic-routes",
    title: "Dynamic Routes in Next.js",
    excerpt:
      "Learn how dynamic routes work in Next.js and how you can create flexible and dynamic URL structures...",
    content:
      "Dynamic routes in Next.js allow you to create flexible URL structures by using dynamic segments. These segments are specified using square brackets in file names, e.g., [slug]. Dynamic routes can be used to display content based on dynamic parameters such as article slugs, user profiles, or product categories.",
  },
  {
    id: 4,
    slug: "catch-all-routes",
    title: "Catch-All Routes in Next.js",
    excerpt:
      "Catch-all routes allow you to match multiple segments in the URL path, making it easier to create hierarchical routing...",
    content:
      "Catch-all routes in Next.js are used when you want to match multiple segments in a URL. This is useful for scenarios like displaying nested resources or multi-level category pages. You can define catch-all segments using the [...slug] syntax, where slug can match any path segment.",
  },
  {
    id: 5,
    slug: "optional-catch-all-routes",
    title: "Optional Catch-All Routes in Next.js",
    excerpt:
      "Learn how optional catch-all routes work and how they allow you to handle both specific and generalized URL paths...",
    content:
      "Optional catch-all routes are an extension of catch-all routes in Next.js. They allow for optional segments, meaning that the route can also work with or without additional segments. This can be useful when you want to allow both the base URL and multiple hierarchical paths.",
  },
];
