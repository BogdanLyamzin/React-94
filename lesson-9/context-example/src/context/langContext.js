import { useState, createContext } from "react";

export const langContext = createContext("ua");

const LangProvider = ({ children }) => {
    const [lang, setLang] = useState("ua");

    const toggleLang = () => setLang(prevLang => prevLang === "ua" ? "en" : "ua");

    return (
        <langContext.Provider value={{ lang, toggleLang }}>
            {children}
        </langContext.Provider>
    )
}

export default LangProvider;