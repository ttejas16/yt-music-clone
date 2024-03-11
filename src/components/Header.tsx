import { ReactNode } from "react";
import { Menu, Search, Cast } from "lucide-react";
import Logo from "/logo.svg";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Profile from "./Profile";
import useGlobalContext from "@/utils/globalContext";

function Header(): ReactNode {
    const globalContext = useGlobalContext();

    function handleClick() {
        if (window.innerWidth < 1024) { 
            globalContext?.setHideSidebar((previous) => !previous);
        }
        if (window.innerWidth >= 1024) {
            globalContext?.setExtendSidebar((previousValue) => !previousValue);
        }
    }

    return (

        <div className="flex w-full border-b-[1px] border-neutral-700 sticky top-0 bg-black z-50">
            <div className="w-[250px] flex px-5 py-3 gap-x-3 items-center">

                <Button 
                    size={"icon"} 
                    onClick={handleClick} 
                    variant={"ghost"} 
                    className="hover:bg-black rounded-full">

                    <Menu className="w-6 h-6 text-white" />

                </Button>
                <img src={Logo} alt="logo image" className="h-[24px] w-[80px]" />
            </div>
            <div className="flex w-full justify-end lg:justify-between items-center px-5 lg:px-28 py-3">

                <div className="hidden lg:flex items-center justify-between bg-neutral-700 border-[1px] border-neutral-500 
                        opacity-[0.7] rounded-md  lg:w-[450px] h-full">
                    <Search size={35} className="px-3 font-light w-[10%] cursor-pointer" />
                    <Input
                        type="text"
                        className="bg-neutral-700 text-base font-normal h-full
                                w-[90%] border-none rounded-none text-white "
                        placeholder="Search songs, albums, artists and podcasts" />
                </div>

                <div className="flex gap-x-4 items-center">
                    <Search className="block lg:hidden cursor-pointer"/>
                    <Cast className="cursor-pointer" />
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default Header;