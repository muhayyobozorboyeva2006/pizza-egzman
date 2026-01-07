import { Children, createContext, useState } from "react"
import languages from "../translations/languages"

export const LanguageContext = createContext()

const CHageLanguage = ({children}) => {
    const [lang , setLang ] = useState("ru")
    const lan = languages[lang]
    return (
      <LanguageContext.Provider value={{lang , setLang , lan}}>
        {children}
      </LanguageContext.Provider>
    )
}
export default CHageLanguage