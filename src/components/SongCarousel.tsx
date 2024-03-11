import { ReactNode } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import { Song } from "./ui/song-card";
import { Song as SongType } from "./SongInterface";

const songs: SongType[][] = [
    [
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },


    ],
    [
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },


    ],
    [
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },


    ],
    [
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },
        {
            artistName: "Imagine Dragons",
            albumName: "Origins",
            img: "/song_holder.jpg",
            songName: "Natural",
            songURL: ""
        },


    ],




]

function SongCarousel(): ReactNode {
    return (
        <Carousel className="w-full flex flex-col ">
            <div className="flex w-full justify-between">
                <div className="">
                    <p className="text-xs sm:text-sm lg:text-base">START RADIO BASED ON A SONG</p>
                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-wide pt-1">Quick Picks</h1>
                </div>
                <div className="flex items-end gap-x-2 md:gap-x-3">
                    <Button variant={"ghost"}
                        size={"sm"}
                        className="px-3 sm:px-4 text-xs hover:bg-neutral-800 hover:text-white rounded-full border border-neutral-800">
                        Play all
                    </Button>
                    <div className="flex gap-x-3">
                        <CarouselPrevious className="static size-7 md:size-8 translate-y-0 bg-black hover:bg-neutral-800 hover:text-white" />
                        <CarouselNext className="static size-7 md:size-8 translate-y-0 bg-black hover:bg-neutral-800 hover:text-white" />
                    </div>
                </div>
            </div>
            <div>
                <CarouselContent className="-ml-1 flex justify-start py-4 w-full">
                    {
                        songs.map((arr, index) => {
                            return (
                                <CarouselItem key={index} className="pl-3 basis-1/2 xl:basis-1/3">
                                    <div className="w-full flex flex-col justify-start items-start gap-y-3 ">
                                        {
                                            arr.map((val, idx) => {
                                                return (
                                                    <Song key={idx}
                                                        songName={val.songName}
                                                        albumName={val.albumName}
                                                        img={val.img}
                                                        artistName={val.artistName}
                                                        songURL={val.songURL} />
                                                )
                                            })
                                        }
                                    </div>
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
            </div>
        </Carousel>
    )
}

export default SongCarousel;