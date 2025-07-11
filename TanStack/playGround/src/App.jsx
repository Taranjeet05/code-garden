import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./Pages/Home";
import FetchOld from "./Pages/FetchOld";
import FetchRq from "./Pages/FetchRq";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-gray-500 min-h-screen">
        <MainLayout />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRq />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
