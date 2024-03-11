import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import NextSongs from "./NextSongs";
import Lyrics from "./Lyrics";
import { Song } from "./SongInterface";
import { Skeleton } from "./ui/skeleton";

import {
    ChevronDown,
    ChevronUp,
    LucideVolume2,
    MoreVertical,
    Pause,
    Play,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    ThumbsDown,
    ThumbsUp
} from "lucide-react";
import useSongContext from "@/hooks/useSongContext";


interface NavButton {
    name: string,
    id: number
}

const navButtons: NavButton[] = [
    {
        name: "UP NEXT",
        id: 1
    },
    {
        name: "LYRICS",
        id: 2
    },
    {
        name: "RELATED",
        id: 3
    }
];

function SongModal(): ReactNode {

    const songContext = useSongContext();
    const [currentNavButton, setCurrentNavButton] = useState<number>(1);
    const animation = songContext?.showSongModal ? "animate-slide-up" : "animate-slide-down";

    return (
        <div onAnimationEnd={() => {
            if (!songContext?.showSongModal) {
                songContext?.setHideModal(true);
            }
        }}
            className={`w-full h-full bg-black flex flex-col xl:flex-row justify-start xl:justify-center items-center py-8 xl:py-16 relative ${animation}`}>

            <div className="w-full xl:w-[60%] h-[55%] xl:h-full px-8 xl:px-24 flex items-start">
                <img src={songContext?.songQueue[songContext.currentSongIndex]?.img} alt="" className="object-contain w-full h-full " />
            </div>
            <div className="w-[80%] xl:w-[40%] xl:h-full xl:pr-16 mt-2 xl:mt-0">
                <div className="w-full flex">
                    {
                        navButtons.map((btn) => {
                            const isActive = currentNavButton == btn.id;
                            return (
                                <Button
                                    key={btn.id}
                                    variant={"ghost"}
                                    size={"lg"}
                                    onClick={() => setCurrentNavButton(btn.id)}
                                    className={`hover:bg-black hover:text-white
                                    w-full rounded-none text-xs sm:text-sm px-0 sm:px-8 text-neutral-400
                                    ${isActive && "border-b-[1px] text-white"}`}>
                                    {btn.name}
                                </Button>
                            )
                        })
                    }
                </div>
                <div className="h-[90%] xl:h-[90%] flex flex-col gap-y-2 overflow-y-scroll
                px-2 py-2 text-xs sm:text-sm lg:text-base scrollbar-thin">
                    {currentNavButton == 1 && <NextSongs />}
                    {currentNavButton == 2 && <Lyrics />}
                    {currentNavButton == 3 && <NextSongs />}
                </div>
            </div>
        </div>
    )
}

export default SongModal;