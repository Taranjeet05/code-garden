import Header from "./Header";
import Footer from "./Footer";
import Outlet from "./Outlet";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
