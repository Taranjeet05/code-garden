import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import UseEffect from "./pages/UseEffect";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <MainLayout />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/useEffect",
          element: <UseEffect />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
