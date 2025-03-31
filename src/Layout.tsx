import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

type Props = {}

function Layout({}: Props) {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout