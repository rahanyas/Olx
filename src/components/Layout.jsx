import { Outlet } from "react-router-dom"
import Navbar from "./elements/Navabar";
import Footer from "./pages/Footer";
import Categories from "./elements/Categories";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="h-16"></div>
      <Categories />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout