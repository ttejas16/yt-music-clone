import React, { useContext } from "react";

type GlobalContextType = {
    extendSidebar:boolean,
    setExtendSidebar:React.Dispatch<React.SetStateAction<boolean>>,
    hideSidebar:boolean,
    setHideSidebar:React.Dispatch<React.SetStateAction<boolean>>,
}

const GlobalContext = React.createContext<GlobalContextType | null>(null);

function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalContext };
export default useGlobalContext;