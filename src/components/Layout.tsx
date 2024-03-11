import { ReactNode, useState } from "react";
import { GlobalContext } from "@/utils/globalContext";

interface LayoutProps {
    children: ReactNode
}

function Layout({ children }: LayoutProps): ReactNode {
    const [extendSidebar, setExtendSidebar] = useState<boolean>(true);
    const [hideSidebar, setHideSidebar] = useState<boolean>(window.innerWidth <= 1024);

    window.onresize = () => {
        if (window.innerWidth <= 1024) {     
            setHideSidebar(true);
            setExtendSidebar(true);
        }
        if (window.innerWidth > 1024) {
            setHideSidebar(false);
        }
    }

    return (
        <GlobalContext.Provider value={{
            extendSidebar,
            setExtendSidebar,
            hideSidebar,
            setHideSidebar
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Layout;