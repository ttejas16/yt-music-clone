import { ReactNode } from "react";
import { Carousel, CarouselPrevious, CarouselNext, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import { MoreVertical, Play } from "lucide-react";
import { Button } from "./ui/button";

interface Song {
    img: string,
    artistName: string,
    songName: string
}

const arr: Song[] = [
    {
        img: "/nf3.jpg",
        artistName: "NF",
        songName: "Warm Up"
    },
    {
        img: "/luffy.jpg",
        artistName: "Carameii",
        songName: "One Piece EP1071: OVERTAKEN x DRUMS OF LIBERATION [Gear5 Theme] | EPIC VERSION"
    },
    {
        img: "/nf4.jpg",
        artistName: "NF",
        songName: "The Search"
    },
    {
        img: "/safeAndSound.jpg",
        artistName: "Capital Cities",
        songName: "Safe And Sound"
    },
    {
        img:"/your_name.jpg",
        artistName: "Radwimps",
        songName:"Sparkle (Your Name)"
    }
];

function VideoCarousel(): ReactNode {
    return (
        <Carousel className="w-full">
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-x-4">
                    <div>
                        <h1 className="text-xl sm:text-4xl xl:text-5xl font-semibold tracking-wide pt-1">Recommended music videos</h1>
                    </div>
                </div>
                <div className="flex gap-x-3">
                    <CarouselPrevious className="static size-7 md:size-8 translate-y-0 bg-black hover:bg-neutral-800 hover:text-white" />
                    <CarouselNext className="static size-7 md:size-8 translate-y-0 bg-black hover:bg-neutral-800 hover:text-white" />
                </div>
            </div>
            <CarouselContent className="-ml-1 py-4 w-full">
                {
                    arr.map((song, index) => {
                        return (
                            <CarouselItem key={index} className="pl-3 basis-1/2 lg:basis-1/3 ">
                                <Card className="w-full border-none bg-black text-white rounded-sm relative group cursor-pointer">
                                    <div className="absolute w-full h-full justify-end bg-black opacity-[0.4] hidden group-hover:flex z-10">
                                        <Button variant={"ghost"} size={"icon"} className="rounded-full hover:bg-opacity-[0.5]"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                console.log("hello");
                                            }}>
                                            <MoreVertical color="white" />
                                        </Button>
                                    </div>
                                    <div className="h-full w-full absolute flex justify-center items-center">
                                        <Play fill="white" color="white" className="size-6 xl:size-8 z-20 cursor-pointer" />
                                    </div>
                                    <img src={song.img} alt="" className="object-cover w-full h-full rounded-sm" />
                                </Card>
                                <div className="py-2 text-xs sm:text-sm xl:text-base">
                                    <p>{song.songName}</p>
                                    <p>{song.artistName} • 10M Views</p>
                                </div>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    )
}

export default VideoCarousel;