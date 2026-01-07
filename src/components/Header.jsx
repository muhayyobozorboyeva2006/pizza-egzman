import { memo, useContext, useState } from "react"
import logo from "../imges/Location.png"
import account from "../imges/Account.png"
import group from "../imges/Group.png"
import shopping from "../imges/SHopping.svg"
import { NavLink } from "react-router-dom"
import grou from "../imges/Grou.png"
import { LanguageContext } from "../context/CHangeLanguage"
import { CartContext } from "../context/ChangeCart"

const Headers = () => {
    const { setLang, lan } = useContext(LanguageContext)
    const {cart} = useContext(CartContext)

 let AllPrice = cart.reduce((sum  , el) => {
    sum += el.basePrice * el.qty
    return sum
 }, 0)

    return (
       <>
            <header className="fixed top-0 w-full  bg-[#FFFFFF]  z-10">
                <div className="container mx-auto  flex items-center justify-between border-b border-gray-200 pb-4 pt-4">
            <div className="flex gap-2  ">
      <img src={logo} alt="" />
      <select >
                            <option className="text-2" value="">Москва</option>
        <option className="text-2" value="ru">AQSH</option>
        <option className="text-2" value="en">O'zbekiston</option>
    </select>
            </div>
              
           <nav>
            <ul className="flex  items-center justify-baseline gap-15">
    <li>
                            <NavLink to="/" className="text-[12px] ">
                                    {lan.проверить}
                            </NavLink>
    </li>
    <li>
                            <NavLink to="" className="text-[12px] ">
                                    {lan.среднее}
                            </NavLink>
    </li>
    <li>
                            <NavLink to="" className="text-[12px] "> 
                                    {lan.время}
                            </NavLink>
    </li>
                        <div className="flex gap-2">
                            <img src={account} alt="odamlar" />
                                <h1 className="text-sm ">{lan.войти}</h1>
                        </div>

            </ul>
            </nav> 
                </div>   
                <div className="container mx-auto  flex items-center justify-between  border-b border-gray-200  pb-2 pt-2">
                  <div className="flex gap-2 ">
                    <img src={grou} alt="" />
                        <h1>{lan.куда}</h1>
                    </div>  
                    <div className="flex gap-2">
                        <div className="bg-[#FF7010] w-full h-10 border border-amber-600 rounded-md flex items-center justify-center gap-2 cursor-pointer relative">
                            <img src={shopping} className="" alt="shopping" />
                            <span className=" absolute top-0.5 left-6 bg-white text-amber-500 text-md w-4 h-4 flex items-center justify-center rounded-full"> {cart.length}</span>
                            <span className="text-[#FFFFFF]">{AllPrice} $</span>
                        </div>
                        <select className="bg-[#FF7010] w-20 h-10 border border-amber-600 rounded-md flex items-center justify-center gap-2 cursor-pointer text-white border-2 border-amber-600" onChange={(e) => setLang(e.target.value)}>
                            <option className="text-2 text-white" value="ru">RU</option>
                            <option className="text-2 text-white" value="uz">UZ</option>
                            <option className="text-2 text-white" value="en">EN</option>
                        </select>
                    </div>
               
        </div> 
    </header>
       </>
    )
}
const HeadersMemo = memo(Headers)
export default HeadersMemo