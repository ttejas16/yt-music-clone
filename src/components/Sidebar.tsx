import React, { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { Compass, Home, ListMusic, LucideIcon, Pin, PlayCircle, Plus } from "lucide-react";
import useGlobalContext from "@/utils/globalContext";

interface SidebarItem {
    icon: LucideIcon,
    name: string,
    href: string
};

const sidebarItems: SidebarItem[] = [
    {
        icon: Home,
        name: "Home",
        href: ""
    },
    {
        icon: Compass,
        name: "Explore",
        href: ""
    },
    {
        icon: ListMusic,
        name: "Library",
        href: ""
    },
    {
        icon: PlayCircle,
        name: "Upgrade",
        href: ""
    },
];

function Sidebar(): ReactNode {
    const globalContext = useGlobalContext();
    const isExtendSidebar = globalContext?.extendSidebar;
    const width = isExtendSidebar ? 'w-[250px]' : 'w-[100px]';
    const animation = globalContext?.hideSidebar ? 'animate-slide-out' : 'animate-slide-in';
    
    const [isActive, setIsActive] = useState<number>(0);


    return (
        <div className={`${width} ${animation} lg:animate-none
            top-16 left-0 h-screen lg:h-[90vh] fixed lg:sticky flex flex-col 
            shrink-0 py-3 px-4 border-r-[1px] border-neutral-700 bg-black z-10`}>
            {
                sidebarItems.map((val: SidebarItem, index) => {
                    return (
                        <Button
                            size={"lg"}
                            key={index}
                            onClick={() => setIsActive(index)}
                            className={`
                            ${isActive == index ? 'bg-neutral-800 hover:bg-neutral-800' : 'bg-black hover:bg-neutral-700'}
                            ${isExtendSidebar ? 'flex-row justify-start py-6' : 'flex-col justify-center py-2'} 
                            text-sm sm:text-base flex items-center gap-x-5 gap-y-2 `}>

                            <val.icon />
                            {
                                isExtendSidebar && 
                                <span>{val.name}</span>
                            }

                        </Button>
                    )
                })
            }
            {
                isExtendSidebar &&
                <>
                    <hr className="w-full border-neutral-700 my-6" />
                    <div className="flex flex-col gap-y-4 ">
                        <Button size={"sm"} className="text-xs sm:text-base hover:bg-neutral-700 flex justify-center items-center gap-x-1 rounded-full">
                            <Plus />
                            <span>New Playlist</span>
                        </Button>
                        <div className="w-full">
                            <Button variant={"default"} size={"default"}
                                className="flex justify-between w-full bg-black hover:bg-neutral-700 px-4 py-7 group">

                                <div className="text-start">
                                    <p>Liked Playlist</p>
                                    <div className="font-normal text-xs flex items-center gap-x-1">
                                        <Pin fill="gray" color="gray" size={"10px"} />
                                        <span>Auto playlist</span>
                                    </div>
                                </div>
                                <PlayCircle fill="white" color="black" className="hidden group-hover:block" />
                            </Button>
                            <Button variant={"default"} size={"default"}
                                className="flex justify-between w-full bg-black hover:bg-neutral-700 px-4 py-7">

                                <div className="text-start">
                                    <p>Episodes for later</p>
                                    <div className="font-normal text-xs flex items-center">
                                        <span>Auto playlist</span>
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default Sidebar;