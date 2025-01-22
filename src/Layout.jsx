import Nav from "./components/Nav"
import { Outlet } from "react-router"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
        <Nav />
        <main>
            <Outlet />
        </main>
        <Footer />  
    </>
  )
}

export default Layout