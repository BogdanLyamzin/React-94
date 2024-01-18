import { useContext } from "react";

import { langContext } from "../context/langContext";

const useLang = ()=> {
    const data = useContext(langContext);

    return data;
}

export default useLang;