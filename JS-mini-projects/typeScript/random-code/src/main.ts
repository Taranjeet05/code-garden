// Map - Problem : You are building a Dashboard Api Response mapper

type ApiUser = {
  id: number;
  first_name: string;
  last_name: string;
  is_active: boolean;
};

const apiUser: ApiUser[] = [
  { id: 1, first_name: "John", last_name: "Doe", is_active: true },
  { id: 2, first_name: "Jane", last_name: "Smith", is_active: false },
];

const mapper = apiUser.map((user) => ({
  id: user.id,
  fullName: `${user.first_name} ${user.last_name}`,
  status: user.is_active ? "ACTIVE" : "INACTIVE",
}));

console.log("Solved Map Question", mapper);

// Filter - Problem : you're implementing search & filter for todo app.

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todo: Todo[] = [
  { id: 1, title: "Learn Ts", completed: false },
  { id: 2, title: "Learn JS", completed: true },
  { id: 3, title: "learn React", completed: false },
];

const filter = todo.filter(
  (todo) => !todo.completed && todo.title.toLowerCase().includes("learn")
);

console.log("Solved filter Question", filter);

// Find - Problem : You are Building a role-based access system

type User = {
  id: number;
  role: "Admin" | "Editor" | "User";
};

const user: User[] = [
  { id: 1, role: "Admin" },
  { id: 2, role: "Editor" },
  { id: 3, role: "User" },
];

const find = user.find((user) => user.role === "Admin") ?? {
  id: -1,
  role: "User",
};

console.log("Solved Find Question:", find);

// FindIndex - Problem : You are updating a shopping cart.

type Cart = {
  id: number;
  quantity: number;
};

const cart: Cart[] = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 10 }, // 11
  { id: 3, quantity: 3 },
  { id: 4, quantity: 2 },
];

const findIndex = cart.findIndex((item) => item.id === 2);

const updateCart =
  findIndex === -1
    ? cart
    : cart.map((item, i) =>
        i === findIndex ? { ...item, quantity: item.quantity + 1 } : item
      );

console.log("Solved findIndex Problem", updateCart);

// Some - Problem : You are validating checkout eligibility.

type Product = {
  id: number;
  outOfStock: boolean;
};

const products: Product[] = [
  { id: 1, outOfStock: false },
  { id: 2, outOfStock: false },
  { id: 3, outOfStock: false },
  { id: 4, outOfStock: true },
];

const isBlocked = products.some((product) => product.outOfStock); // Checkout is blocked if ANY product is out of stock. // true

console.log(
  "Some() Question Solved: checkout is Blocked If any Product is Out of Stock",
  isBlocked
);

// Every - Problem : You’re validating form submission.

type Field = {
  value: string;
  required: boolean;
};

const fields: Field[] = [
  { value: "Value1", required: true },
  { value: "Value2", required: false },
  { value: "Value3", required: true },
  { value: "Value4", required: false },
];

const validationCheck = fields.every(
  (field) => !field.required || field.value.trim().length > 0
);

console.log(
  "Solved Every() Question, Validation check for all required fields:",
  validationCheck
);

// Reduce - Problem : You are  building analytics data for admin dashboard

type Order = {
  id: number;
  amount: number;
  status: "completed" | "pending" | "cancelled";
};

const orders: Order[] = [
  { id: 1, amount: 100, status: "completed" },
  { id: 2, amount: 50, status: "pending" },
  { id: 3, amount: 200, status: "completed" },
  { id: 4, amount: 80, status: "cancelled" },
];

const analyticsData = orders.reduce(
  (acc, order) => ({
    completedAmount:
      acc.completedAmount + (order.status === "completed" ? order.amount : 0),
    pendingAmount:
      acc.pendingAmount + (order.status === "pending" ? order.amount : 0),
    cancelledAmount:
      acc.cancelledAmount + (order.status === "cancelled" ? order.amount : 0),
  }),
  { completedAmount: 0, pendingAmount: 0, cancelledAmount: 0 }
);

console.log("Solved Reduce() Question,:", analyticsData);

