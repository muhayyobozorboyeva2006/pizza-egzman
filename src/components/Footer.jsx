import { memo, useContext } from "react"
import footer  from "../imges/footer.png"
import tel from "../imges/tel.png"
import laksiya from "../imges/laksiya.png"
import dasturla from "../imges/dasturla.png"
import { LanguageContext } from "../context/CHangeLanguage"
const Footers = () => {
    const {lan} = useContext(LanguageContext)
    return (
        <>
      <footer >
                <div className="container mx-auto  flex justify-between items-start gap-10 mt-6">
            <div className="flex flex-col  gap-20">
                <img className="w-36 " src={footer} alt="" />
                        <h1 className="text-[#191919] text-sm">
                            {lan.copyright}
                </h1>
            </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-black-900 text-xl ">{lan.Куда}</h1>
                        <h1 className="text-black-200 text-[14px]">{lan.компании}</h1>
                        <p className="text-black-200 text-[14px]">{lan.Пользовательское}</p>
                        <p className="text-black-200 text-[14px]"> {lan.Условия  } </p>
            </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-black-900 text-xl ">{lan.Помощь}</h1>
                        <h1 className="text-black-200 text-[14px]">{lan.Ресторан}</h1>
                        <p className="text-black-200 text-[14px]">{lan.Поддержка}</p>
                        <p className="text-black-200 text-[14px]">{lan.Kontaktlar}</p>
                        <p className="text-black-200 text-[14px]"> Отследить заказ </p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-black-900 text-xl ">Контакты</h1>
                        <img className="w-45 h-5" src={tel} alt="" />
                        <img className="w-58 h-5" src={laksiya} alt="" />
                        <img className="w-50 h-5" src={dasturla} alt="" />
                    </div>

        </div>
      </footer>
        </>
    )
}
const FooterMemo = memo(Footers)
export default FooterMemo