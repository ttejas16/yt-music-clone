import { ReactNode } from "react";

interface Artists {
    img: string,
    artistName: string,
    subscriberCount: string
}

const artistArr: Artists[] = [
    {
        img: "/nf_profile2.jpg",
        artistName: "NF",
        subscriberCount: "9.61M",
    },
    {
        img: "/logic_profile.jpg",
        artistName: "Logic",
        subscriberCount: "3.36M",
    },
    {
        img: "/linkin_park.jpg",
        artistName: "Linkin Park",
        subscriberCount: "21M",
    },
    {
        img: "/sasha_sloan.jpg",
        artistName: "Sasha Alex Sloan",
        subscriberCount: "1.59M",
    },
    {
        img: "/divine.jpg",
        artistName: "Divine",
        subscriberCount: "6.98M",
    },
    {
        img: "/yoasobi.jpg",
        artistName: "Yoasobi",
        subscriberCount: "6.3M",
    },
    {
        img: "/radwimps.jpg",
        artistName: "Radwimps",
        subscriberCount: "2.83M",
    },
    {
        img: "/anne_marie.jpg",
        artistName: "Anne-Marie",
        subscriberCount: "11.6M",
    },
];

function FavArtists(): ReactNode {
    return (
        <section className="w-full ">
            <div className="flex justify-between items-end">
                <div className="flex items-center gap-x-4">
                    <div>
                        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold tracking-wide pt-1">Favourite Artists</h1>
                    </div>
                </div>
            </div>
            <div className="py-4 sm:py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-10 grid-flow-row">
                {
                    artistArr.map((artist, index) => {
                        return (
                            <div key={index} className="flex flex-col">
                                <img src={artist.img} alt="" className="rounded-full w-full object-cover p-3" />
                                <div className="flex flex-col items-center w-full h-full">
                                    <p className="text-base sm:text-lg font-medium text-center">{artist.artistName}</p>
                                    <p className="text-xs sm:text-sm text-neutral-400">{artist.subscriberCount} Subscribers</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default FavArtists;