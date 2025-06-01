type NavigationLink = {
  id: number;
  path: string;
  name: string;
};

const navigationLinks: NavigationLink[] = [
  {
    id: 1,
    path: "/",
    name: "HOME",
  },
  {
    id: 2,
    path: "/products",
    name: "PRODUCTS",
  },
  {
    id: 3,
    path: "/cart",
    name: "CART",
  },
];

export default navigationLinks;
    