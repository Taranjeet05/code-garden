# Exploring Next.js 15 Routing with Static, Dynamic, and Nested Pages

## Description

This project demonstrates the power of file-based routing in **Next.js 15**. It includes:

- Static pages showcasing Next.js benefits.
- Dynamic routes using the `[slug]` syntax to display article details.
- Nested routes for deeper insights into the performance and reliability of Next.js.
- A global navigation bar using the **Layout** pattern to enhance user experience.

---

## User Story

**As a Next.js learner, I want to build a small project that demonstrates the power of file-based routing in Next.js 15. This project will include static pages, dynamic routes, and nested routes, along with a global navigation bar using the Layout pattern.**

---

## Acceptance Criteria

### 1. **Global Navigation (Layout.tsx)**

- A **NavBar** component was created with links to all available pages.
- The NavBar was placed inside **Layout.tsx**, ensuring it appears across all pages.
- **Link** component from Next.js was used for client-side transitions.

### 2. **Static Pages (Performance & Reliability)**

- Static pages `/performance` and `/reliability` were created to explain:
  - **Next.js Performance Benefits** (on the `/performance` page).
  - **Next.js Reliability Features** (on the `/reliability` page).
- The UI of these pages was improved for clarity, structure, and easy navigation.

### 3. **Nested Routes (More Info Section)**

- A **More Info** section was added to both the **Performance** and **Reliability** pages.
  - Clicking the "More Info" link navigates to nested routes:
    - `/performance/more-info`: Provides deeper insights into Next.js performance.
    - `/reliability/more-info`: Explains additional reliability features of Next.js.

### 4. **Dynamic Routes (Article Pages)**

- A dynamic route for article pages was created using the `[slug]` syntax.
- The URL structure `/articles/[slug]` dynamically fetches and displays the article based on the `slug` from the URL.
- In **app/articles/page.tsx**, the list of all articles is displayed, where each article links to its respective dynamic page:
  - The link for each article leads to `/articles/[slug]` using the `Link` component from Next.js.
- In **app/articles/[slug]/page.tsx**, the dynamic content of the article is displayed based on the `slug` provided in the URL.

Example URLs:

- `/articles/nextjs-routing`: Displays an article about Next.js Routing.
- `/articles/server-components`: Displays an article about Server Components.

- **Sample articles** are defined and used from a static `articles` array, which includes the `id`, `title`, `slug`, and `excerpt`. The articles are displayed with their titles and excerpts on the `/articles` page, and when clicked, each one navigates to its respective dynamic article page.

### 5. **Bonus Features (Optional)**

- **404 Page**: A custom 404 page was added for undefined routes.
- **Home Page**: A welcoming home page was created with an introduction and links to the different sections of the app.

---

## Outcome

By completing this project, I gained hands-on experience with:

- ✅ **Static Pages** in Next.js for content display.
- ✅ **Nested Routes** for better content organization and user navigation.
- ✅ **Dynamic Routes** using `[slug]` to fetch and display content dynamically.
- ✅ **Global Layout & Navigation** using a shared `NavBar` component in the `Layout.tsx`.
- ✅ **Client-side navigation** using the `Link` component for smooth transitions.

---

## Technologies Used

- **Next.js 15**: A React framework for building static and dynamic web applications.
- **Tailwind CSS**: For styling the components and pages with utility-first CSS.
- **React**: JavaScript library for building user interfaces.
- **JavaScript/TypeScript**: For app logic and functionality.

