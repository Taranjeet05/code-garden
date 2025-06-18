import { Route, Routes } from "react-router-dom";
import CreateNewTaskPage from "./pages/CreateNewTaskPage";
import App from "./App";
import ProfilePage from "./pages/ProfilePage";
import TodoDetailPage from "./pages/TodoDetailPage";

const Router = () => {
  return (
    <div>
      {/* routes for navigation */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tasks/new" element={<CreateNewTaskPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/todo-detail" element={<TodoDetailPage />} />
      </Routes>
    </div>
  );
};

export default Router;
