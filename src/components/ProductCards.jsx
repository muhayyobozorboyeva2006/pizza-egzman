import { useContext } from "react"
import { CartContext } from "../context/ChangeCart"

const ProductCarts = ({id , image , title , basePrice , addToCart , increase , decrease}) => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <div className="w-78 h-120 rounded-2xl bg-white p-3 hover:shadow-2xl">
                <img className="w-75 h-75" src={image} alt="" />
                <h1 className="text-black text-2xl pt-3 pb-2 truncate">{title}</h1>
                <p className="text-black text-[14px]  pt-2 pb-2  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quibusdam.
                </p>
              
                <div className="flex items-center justify-center gap-10 ">
                {
                        cart.find((el) => el.id === id) ? (
                  <div className="flex items-center gap-3">
 <button  onClick={() => decrease(id)}
  className="text-white bg-[#FF7010] rounded-sm w-13 h-12 text-sm cursor-pointer">-</button>
 <span>{cart.find((el) => el.id === id).qty}</span>
<button onClick={() => increase(id)}
className="text-white bg-[#FF7010] rounded-sm w-13 h-12 text-sm cursor-pointer">+</button>
                  </div>
                        ) : (

                                <button onClick={() => addToCart(id)}
                                    className="text-white bg-[#FF7010] rounded-sm w-30 h-12 text-sm cursor-pointer">Выбрать</button>
                        )

                    }
                    <p className="text-[#FF7010] text-[18px] ">{basePrice} $ </p>
                </div>

            </div>

        </div>
    )
}
export default ProductCarts