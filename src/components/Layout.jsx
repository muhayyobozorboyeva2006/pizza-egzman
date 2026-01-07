import { Outlet } from "react-router-dom"
import HeadersMemo from "./Header"
import FooterMemo from "./Footer"

const Layout = () => {
    return(
        <>
        <HeadersMemo/>
            <main className="mt-30 bg-gray-100 ">
            <Outlet/>
        </main>
        <FooterMemo/>
        </>
    )
}
export default Layout