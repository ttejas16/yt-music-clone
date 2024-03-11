import { ReactNode } from "react";
import { Song as SongType } from "../SongInterface"

function Song(props:SongType): ReactNode {
    
    return (
        <div className="flex gap-x-2 sm:gap-x-3 w-full items-center pr-1 sm:pr-4 xl:pr-9 text-xs sm:text-sm xl:text-base ">
            <div className="h-full w-[55px]">
                <img src={props.img} alt="" className="rounded-sm" />
            </div>
            <div className="w-full">
                <p>{props.songName}</p>
                <p className="text-neutral-300 line-clamp-1">{props.artistName} • {props.albumName}</p>
            </div>
        </div>
    )
}

export { Song };