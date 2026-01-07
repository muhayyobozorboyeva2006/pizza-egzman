import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import React from "react"
const HomePages = React.lazy(() => import("./pages/home/HomePages"))
const MenuPages = React.lazy(() => import("./pages/menu/MenuPages"))

const App = () => {
return(
 <BrowserRouter>
 <Routes>
  <Route element={<Layout/>}>
    <Route path='/' element={<HomePages/>}/>
    <Route path='menus' element={<MenuPages/>}/>
  </Route>
 </Routes>
 </BrowserRouter>
)
}
export default App