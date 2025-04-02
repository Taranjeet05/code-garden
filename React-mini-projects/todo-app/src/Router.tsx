import { Route, Routes } from "react-router-dom";
import NewTaskPage from "./pages/NewTaskPage";
import App from "./App";

const Router = () => {
  return (
    <div>
      {/* routes for navigation */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tasks/new" element={<NewTaskPage />} />
      </Routes>
    </div>
  );
};

export default Router;
