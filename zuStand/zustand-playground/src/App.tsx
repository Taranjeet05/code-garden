import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Links4Pages from "./components/Links4Pages";
import { routes } from "./data/routesData";


function App() {
  return (
    <Router>
      <div className="bg-cyan-950 text-white h-screen">
        <Links4Pages />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route: { path: string; component: React.ComponentType }) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;