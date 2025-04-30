import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container pt-3">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
