import React, { ReactNode, useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import { ListMusic, ListX, MoreVertical, Play } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Song } from "./SongInterface";
import Album from "./ui/album";


const arr: Song[] = [
    {
        artistName: "NF",
        albumName:"The Search",
        img: "/nf2.jpg",
        songName: "The Search",
        songURL:"/nf-the-search.mp3"
    },
    {
        img: "/ashesOnTheFire.jpg",
        albumName: "Attack On Titan",
        artistName: "Kohta Yamamoto",
        songName: "Ashes on the fire -PTV-",
        songURL:"/ashes-on-the-fire.mp3",
    },
    {
        img: "/lost.jpg",
        albumName:"Meteroa",
        artistName: "Linkin Park",
        songName: "Lost",
        songURL:"/linkin-park-lost.mp3",
    },
    {
        img: "/fireflies.jpg",
        artistName: "Owl City",
        songName: "Fireflies",
        albumName:"",
        songURL: ""
    },

    {
        img: "/op1.jpg",
        artistName: "Carmeii",
        songName: "Overtaken (Drums of liberation)",
        albumName:"",
        songURL: ""
    },
    {
        img: "/nf.jpg",
        artistName: "NF",
        songName: "HOPE",
        albumName:"",
        songURL: ""
    },
    {
        img: "/op2.jpg",
        artistName: "Carmeii",
        songName: "Wano Theme (Drums of liberation)",
        albumName:"",
        songURL: "/wano-theme.mp3"
    },
    {
        img: "/logic.jpg",
        artistName: "Logic",
        songName: "Bleed It",
        albumName:"",
        songURL: ""
    },
    // {
    //     img: "/ashesOnTheFire.jpg",
    //     artistName: "Kohta Yamamoto",
    //     songName: "ət'aek till we are Ashes"
    // },
    // {
    //     img: "/arcane.jpg",
    //     artistName: "Bea Miller",
    //     songName: "Playground (from the series Arcane League of Legends)"
    // },
    // {
    //     img: "/numb.jpg",
    //     artistName: "Linkin Park",
    //     songName: "Numb"
    // },
    // {
    //     img: "/older.jpg",
    //     artistName: "Sasha Alex Sloan",
    //     songName: "Older"
    // },
]


function AlbumCarousel(): ReactNode {
    const [showOptions, setShowOptions] = useState<number>(-1);

    return (
        <Carousel className="flex flex-col w-full">
            <div className="flex justify-between w-full">
                <div className="flex items-center gap-x-4">
                    <Avatar>
                        <AvatarImage src="/profile.jpg" className="w-10 h-10 sm:w-14 sm:h-14 rounded-full" />
                    </Avatar>
                    <div>
                        <p className="text-xs sm:text-sm lg:text-base">LITERAL TRASH</p>
                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-wide pt-1">Listen again</h1>
                    </div>
                </div>
                <div className="flex items-end gap-x-2 md:gap-x-3">
                    <CarouselPrevious className="static size-7 md:size-8 bg-black hover:bg-neutral-800 hover:text-white" />
                    <CarouselNext className="static size-7 md:size-8 bg-black hover:bg-neutral-800 hover:text-white" />
                </div>
            </div>
            <CarouselContent className=" py-4 ">
                {arr.map((song, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
                        <Album
                            song={song}
                            key={index}
                            showOptions={showOptions}
                            setShowOptions={setShowOptions}
                            idx={index}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default AlbumCarousel;