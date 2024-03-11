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

import { ReactNode, useEffect, useState } from "react";
import useSongContext from "@/hooks/useSongContext";

import { Slider } from "./ui/slider";
import { Button } from "./ui/button";

import { Song } from "./SongInterface";


interface PlayerProps {
    song: Song | null
}

function Player({ song }: PlayerProps): ReactNode {
    const songContext = useSongContext();

    const [audio] = useState<HTMLAudioElement>(new Audio());

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audioDuration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState(0);

    
    const minutes = Math.floor(audioDuration / 60)
    const seconds = Math.floor(audioDuration) % 60;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime) % 60;
    

    function pad(number: number, size: number) {
        let num = number.toString();
        while (num.length < size) {
            num = '0' + num;
        }
        return num;
    }

    function seek(value: number) {
        audio.currentTime = value;
    }

    function toggle() {
        setIsPlaying(!isPlaying);
    }

    let id: NodeJS.Timeout;
    useEffect(() => {
        if (isPlaying) {
            audio.play()
        }
        else {
            audio.pause();
        }


        if (isPlaying) {
            id = setInterval(() => {
                setCurrentTime(audio ? audio.currentTime : 0);
            }, 1000);
        }

        return () => {
            clearInterval(id);
        }

    }, [isPlaying])

    useEffect(() => {
        if (song) {
            audio.src = song.songURL;
        }


        audio.onloadeddata = () => {
            setIsPlaying(true);
            setDuration(audio.duration);
            audio.play();
        }

        audio.onended = () => {
            setIsPlaying(false);
            setCurrentTime(0);
            if (songContext && songContext.currentSongIndex + 1 < songContext.songQueue.length) {
                songContext.setCurrentSongIndex(v => v + 1)
            }
        }

    }, [song])

    return (
        <div className="h-[70px] lg:z-20 fixed flex bottom-0 w-full bg-neutral-800 justify-between items-center p-3">
            <input
                type="range"
                name=""
                id="progessBar"
                className="absolute w-full -top-0 left-0 h-[2px] accent-[#f00]"
                max={audioDuration}
                value={currentTime}
                step={1}
                onChange={(e) => {

                    setCurrentTime(parseInt(e.currentTarget.value));
                    seek(parseInt(e.currentTarget.value));
                }}
            />
            <div className="hidden sm:flex items-center gap-x-4">
                <div className="flex gap-x-6 justify-center items-center">
                    <Button
                        onClick={() => {
                            if (songContext && songContext.currentSongIndex - 1 > - 1) {
                                songContext.setCurrentSongIndex(v => v - 1)
                            }
                            else {
                                seek(0);
                            }
                        }}
                        size={"icon"} className="bg-neutral-800 hover:bg-neutral-800">
                        <SkipBack fill="white" size={17} />
                    </Button>
                    {
                        <Button size={"icon"} className="bg-neutral-800 hover:bg-neutral-800" onClick={() => toggle()}>
                            {
                                isPlaying ?
                                    <Pause fill="white" size={34} stroke="1" /> :
                                    <Play fill="white" size={34} stroke="1" />
                            }
                        </Button>
                    }
                    <Button
                        onClick={() => {
                            if (songContext && songContext.currentSongIndex + 1 < songContext.songQueue.length) {
                                songContext.setCurrentSongIndex(v => v + 1)
                            }
                        }}
                        size={"icon"} className="bg-neutral-800 hover:bg-neutral-800">
                        <SkipForward fill="white" size={17} />
                    </Button>
                </div>
                <div className="text-xs hidden xl:block">
                    {
                        audioDuration ? `${currentMinutes}:${pad(currentSeconds, 2)}` : '0:00'
                    }
                    {" / "}
                    {
                        audioDuration ? `${minutes}:${pad(seconds, 2)}` : '0:00'
                    }
                </div>
            </div>
            <div className="w-full sm:w-[70%] ">
                <div className="flex gap-x-3 items-center justify-between sm:justify-center w-full">

                    <div className="flex items-center gap-x-2 mx-4">
                        <div className="h-full w-[55px] p-1">
                            <img src={song?.img} alt="" className="rounded-sm" />
                        </div>
                        <div className="w-fit text-xs sm:text-sm">
                            <p className=" line-clamp-1">{song?.songName}</p>
                            <p className="text-neutral-300 line-clamp-1">{song?.artistName} • {song?.albumName}</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex justify-center items-center gap-x-2">
                        <Button size={"sm"} className="bg-neutral-800 hover:bg-neutral-700 rounded-full p-2">
                            <ThumbsDown size={22} strokeWidth={1} />
                        </Button>
                        <Button size={"sm"} className="bg-neutral-800 hover:bg-neutral-700 rounded-full p-2">
                            <ThumbsUp size={22} strokeWidth={1} />
                        </Button>
                        <Button size={"sm"} className="bg-neutral-800 hover:bg-neutral-700 rounded-full p-2">
                            <MoreVertical size={22} strokeWidth={1} />
                        </Button>
                    </div>

                    <div className="block sm:hidden">
                        <Button size={"icon"} className="bg-neutral-800 hover:bg-neutral-800" onClick={() => toggle()}>
                            {
                                isPlaying ?
                                    <Pause fill="white" size={30} stroke="1" /> :
                                    <Play fill="white" size={30} stroke="1" />
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="hidden sm:flex items-center justify-center">
                <div className="flex items-center group relative">
                    <Slider
                        defaultValue={[0.5]}
                        max={1}
                        step={0.1}

                        onValueChange={(value) => audio.volume = value[0]}
                        className="bg-neutral-900 absolute -left-20  w-[90px] invisible group-hover:visible py-3 duration-75" />
                    <Button size={"sm"} className="bg-neutral-800 hover:bg-neutral-800 rounded-full pl-6">
                        <LucideVolume2 color="gray" />

                    </Button>

                </div>
                <Button size={"sm"} className="bg-neutral-800 hover:bg-neutral-800 rounded-full">
                    <Repeat color="gray" className="" />
                </Button>
                <Button size={"sm"} className="bg-neutral-800 hover:bg-neutral-800 rounded-full">
                    <Shuffle color="gray" />

                </Button>
                <Button size={"sm"} className="bg-neutral-800 hover:bg-neutral-800 rounded-full">
                    {
                        songContext?.showSongModal ?
                            <ChevronDown color="gray" onClick={() => {
                                songContext.setShowSongModal(false);
                            }} /> :
                            <ChevronUp color="gray" onClick={() => {
                                songContext?.setShowSongModal(true);
                                songContext?.setHideModal(false);

                            }} />

                    }
                </Button>
            </div>
        </div>
    )
}

export default Player;