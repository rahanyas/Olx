import { Outlet } from "react-router-dom"
import Navbar from "./elements/Navabar";
import Footer from "./pages/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout