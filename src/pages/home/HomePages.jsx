import { useContext, useEffect, useState } from "react"
import filter from "../../imges/Filter.png"
import { LanguageContext } from "../../context/CHangeLanguage"
import axios from "axios"
import Cards from "../../components/Cards"
import ProductCarts from "../../components/ProductCards"
import useGet from "../../hooks/useGet"
import { CartContext } from "../../context/ChangeCart"


const HomePages = () => {
    
    const { lan } = useContext(LanguageContext)
    const [selectCategory , setSetectCategory] = useState("2")
   const {data:categories} = useGet("categories")
   const {data:products}  = useGet("products")
   const {setCart , cart } = useContext(CartContext)

   function addToCart(id){
   let cartItem = products.find((el) => el.id === id)
console.log(cartItem);
  setCart((prev) => {
    return[...prev , {...cartItem , qty:1}]
  })
   }
   function increase(id){
setCart((prev) => {
  return  prev.map((el) => {
        if(el.id === id){
            return { ...el, qty:el.qty+1}  
        }else{
            return el
        }
    })
})  
   }
    
   function decrease(id){
setCart((prev) => {
    let cartItem = prev.find((el) => el.id = id )
    if(cartItem.qty > 1){
        return prev.map((el) => {
            if(el.id === id){
                return {...el , qty:el.qty-1}
            }else{
                return el
            }
        })
    }else{
        return prev.filter((el) => el.id !== id)
    }
    
})
   }

    return (

        <> 
            <div className="container mx-auto">
        <div className="pt-20 pb-10 gap-8 flex items-center justify-between">
            {/**categoriyalar */}
            {
                categories?.map((el) => (
                    <div key={el.id} onClick={() => setSetectCategory(el.id)}
                        className="w-32 h-26 border border-gray-300 rounded-2xl bg-[#FFFFFF] p-5  flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl">
                        <img src={el.icon} className="pb-2 w-8 h-8" alt="" />
                        <h1 className="text-md text-red-500 ">{el.title}</h1>
                    </div>
                ))
            }
        </div>
                {/**productlar */}
                <div className="flex gap-5 pb-2 items-center overflow-x-auto">
             
                    {
                            products?.filter((res) => res.categoryId == selectCategory).map((el) => (
                              <Cards{...el}/>
                            ))
                        } 
                
                </div>
               
       <div className="flex items-center justify-center bg-white p-3 rounded-md mt-10 mb-10">
                    <h1 className="text-md text-[#191919]  ">{lan.Проверить}</h1>

                <form class="max-w-md mx-auto ">
                        <label for="search" class="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                        </div>
                        <input  class="block  w-100 h-12 p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-md focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" required />
                    </div>
                </form>
                    <button class=" end-1.5 bottom-1.5 text-white bg-amber-600 shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 cursor-pointer">{lan.провер}</button>

        </div>

      {/**all products */}
        <div>
            {
              categories.map((el) => {
               return (  
                <div>
               <div className="flex items-center justify-between  gap-10 mt-5 mb-5">
                   <h1>{el.title}</h1>
                      <div className="w-30 h-10 bg-white mb-5 flex gap-2 rounded-sm  cursor-pointer">
                          <img className="pt-3 pl-4 w-8 h-8" src={filter} alt="" />
                           <p className="pb-2 pt-2">{el.title}</p>
                      </div>
                  </div>

                       <div className="flex  sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4 gap-5 pb-10 ">
                  {
                    
                    products?.filter((res) => res?.categoryId == el.id).map((el) => (
                        <ProductCarts decrease={decrease} increase={increase} addToCart={addToCart} {...el}/>
                    ))
                           
                  }
                       </div>
                   </div>)
              })
            }
           
             
        </div>
                </div>
            <div className="container mx-auto pb-10 items-center justify-center pl-40">
                <h1 className="text-[#191919] text-4xl mt-10 mb-5">Доставка пиццы в Москве</h1> 
                <p className="text-[16px] text-gray-500">
                    Захотелось чего-то вкусного и сытного? Желание 
                    простое и понятное, только в холодильнике все не то, и <br /> до магазина идти лень.
                     Все пропало? Нет. Недорого заказать пиццу в Москве очень просто! Вам на <br /> помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя,
                      у Domino’s Pizza есть свои <br /> суперсилы: восхитительный вкус продукции из отборных ингредиентов; широкий ассортимент, <br /> включающий легендарные, фирменные и классические виды, для вегетарианцев и любителей <br /> экспериментировать; 
                      быстрая и бесплатная доставка пиццы в течение 30 минут, чтобы вкусное и <br /> ароматное блюдо не успевало остыть.

                </p>
                <p className="text-[16px] text-gray-300">

                    Как сделать заказ <br />
                    Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть Интернет. <br /> Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу онлайн, Вам <br /> необходимо: выбрать понравившийся
                    вариант и количество порций; положить желаемое в «Корзину»; не <br /> уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам из ближайшей пиццерии <br /> Domino’s. И не забудьте оплатить заказ курьеру!
                </p>
                <h1 className="text-amber-600 text-2xl pt-5">Показать полностью</h1>
     </div>

        </>
    )
}
export default HomePages