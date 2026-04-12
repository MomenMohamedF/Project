import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white dark:bg-gray-900/95">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
