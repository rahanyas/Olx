import { Outlet } from "react-router-dom"
import Navbar from "./elements/Navabar";
import Footer from "./pages/Footer";
import Categories from "./elements/Categories";

function Layout() {
  return (
    <>
      <Navbar />
      <Categories />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout