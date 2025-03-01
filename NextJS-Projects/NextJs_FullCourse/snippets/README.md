# Snippets Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## About the Project

This project is a **Snippets App** where users can:
- **Create** a new code snippet.
- **View** existing snippets.
- **Edit** existing snippets.
- **Delete** snippets.

It serves as a practical example to learn and implement various Next.js features and concepts.

### Features:
- **CRUD Operations**: Create, Read, Update, and Delete snippets.
- **Dynamic Routing**: Uses dynamic routes and slugs to handle individual snippets.
- **Server Actions**: Implements server-side actions for form submissions and data mutations.
- **Caching**: Utilizes Next.js caching mechanisms for improved performance.
- **Error Handling**: Includes custom `not-found`, `loading`, and `error` pages for better user experience.

### Technologies Used:
- **Next.js**: For server-side rendering, routing, and caching.
- **Prisma**: As the ORM to interact with the database.
- **React**: For building the UI components.
- **TypeScript**: For type safety and better developer experience.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev