import { lazy, type LazyExoticComponent } from "react";
// This file defines the routes for the application,
// including the path, component to be loaded lazily,
// and whether the route is exact.

type Route = {
  path: string;
  component: LazyExoticComponent<() => React.JSX.Element>;
  exact?: boolean;
};

const routes: Route[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home")),
    exact: true,
  },
  {
    path: "/products",
    component: lazy(() => import("../pages/Products")),
  },
  {
    path: "/cart",
    component: lazy(() => import("../pages/Cart")),
  },
];

export { routes, type Route };
