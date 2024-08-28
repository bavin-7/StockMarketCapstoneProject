import { AuthProvider } from "../Auth/auth";
import Footer from "./FooterComponent/Footer";

import Navbar from "./NavbarComponent/Navbar";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
