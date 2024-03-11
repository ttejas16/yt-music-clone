import React, { ReactNode, useState } from "react";
import { ListMusic, MoreVertical, Play } from "lucide-react";
import { Button } from "./button";
import { Card } from "@/components/ui/card"

import { Song } from "../SongInterface";
import useSongContext from "@/hooks/useSongContext";

interface AlbumProps {
    setShowOptions: React.Dispatch<React.SetStateAction<number>>,
    showOptions: number,
    song: Song,
    idx: number
}

function Album({ song, setShowOptions, showOptions, idx }: AlbumProps): ReactNode {
    const songContext = useSongContext();
    // console.log(songContext);

    const [options, toggleOptions] = useState<boolean>(false);

    return (
        <div className=" flex flex-col items-start justify-start" onClick={() => {
            
            songContext?.setCurrentSongIndex(0);
            songContext?.setSongQueue((previousQueue) => {
                const after = previousQueue.slice(songContext.currentSongIndex + 1);
                return [song, ...after];
            })

            songContext?.setShowSongModal(true);
            songContext?.setHideModal(false);
        }}>
            <Card className="w-full border-none bg-black relative group cursor-pointer">
                <div className="absolute bg-black w-full h-full opacity-[0.4] hidden group-hover:flex justify-end z-10">
                    <Button variant={"ghost"} size={"icon"} className="rounded-full  hover:bg-opacity-[0.5]"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleOptions(!options);
                            setShowOptions(idx);
                        }}>
                        <MoreVertical color="white" />
                    </Button>

                </div>
                {
                    showOptions === idx && options &&
                    <div className="bg-neutral-800 absolute right-0 opacity-[1] z-40 top-10
                                flex flex-col items-start justify-start rounded-sm">
                        <Button
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log(songContext?.songQueue);
                                
                                songContext?.setSongQueue((prev) => {
                                    return [...prev, song];
                                })
                            }}
                            size={"lg"}
                            className="text-sm flex justify-start bg-inherit w-full">
                            <ListMusic />
                            <span className="px-1">
                                Add to queue
                            </span>
                        </Button>
                    </div>

                }
                <div className="h-full w-full absolute flex justify-center items-center">
                    <Play fill="white" color="white" className="size-6 xl:size-8 z-30 cursor-pointer" />
                </div>
                <img src={song.img} alt="" className="object-cover w-full h-full rounded-md" />
            </Card>

            <div className="flex flex-col items-start py-2 text-sm xl:text-base">
                <div>{song.songName}</div>
                <p>Song • {song.artistName}</p>
            </div>

        </div>
    )
}

export default Album;