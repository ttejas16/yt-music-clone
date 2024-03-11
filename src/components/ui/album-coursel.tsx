import * as React from "react"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const arr:number[] = [1,2,3,4,5,6];
export default function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-full">
        <div className="flex">
                <div className="flex items-center gap-x-4">
                    <Avatar>
                        <AvatarImage src="/profile.jpg" className="w-14 h-14 rounded-full" />
                    </Avatar>
                    <div className="">
                        <p>LMAO WADA</p>
                        <h1 className="text-5xl font-semibold tracking-wide pt-1">Listen again</h1>
                    </div>
                </div>
                <div>
                    <CarouselNext/>
                </div>
            </div>
      <CarouselContent className="-ml-1">
        {arr.map((_, index) => (
          <CarouselItem key={index} className="pl-3 md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  )
}
