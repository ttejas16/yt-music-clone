import { ReactNode } from "react";
import useSongContext from "@/hooks/useSongContext";
import { Volume2 } from "lucide-react";


function NextSongs(): ReactNode {
    const songContext = useSongContext();
    console.log(songContext?.songQueue.length);
    console.log(songContext?.currentSongIndex);
    
    return (
        <>
            {songContext?.songQueue.map((val, index) => {
                console.log(val);

                return (
                    <div key={index} className="flex gap-x-3 w-full items-center pr-9 ">
                        <div className="h-full w-[55px] relative">
                            {
                                songContext.songQueue[songContext.currentSongIndex].songName === val.songName &&
                                <div className="opacity-[0.5] bg-black absolute w-full h-full flex justify-center items-center">
                                    <Volume2 />
                                </div>

                            }
                            <img src={val.img} alt="" className="rounded-sm" />
                        </div>
                        <div className="w-full ">
                            <p>{val.songName}</p>
                            <p className="text-neutral-300 line-clamp-1">{val.artistName} • {val.albumName}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default NextSongs;