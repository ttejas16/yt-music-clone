
import { useState } from "react"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Topics from "@/components/Topics"
import AlbumCarousel from "@/components/AlbumCarousel"
import SongCarousel from "@/components/SongCarousel"
import Player from "@/components/Player"
import SongModal from "@/components/SongModal"
import VideoCarousel from "@/components/VideoCarousel"
import FavArtists from "@/components/FavArtists"
import { Song } from "./components/SongInterface"
import SongContext from "./utils/songContext"
import useGlobalContext from "./utils/globalContext"

function App() {

    const [currentSongIndex, setCurrentSongIndex] = useState<number>(-1);
    const [songQueue, setSongQueue] = useState<Song[] | []>([]);
    const [showSongModal, setShowSongModal] = useState<boolean>(false);
    const [hideModal, setHideModal] = useState<boolean>(true);

    const globalContext = useGlobalContext();

    const currentSong = currentSongIndex > -1 ? songQueue[currentSongIndex] : null;


    return (
        <SongContext.Provider value={{
            currentSongIndex,
            setCurrentSongIndex,

            songQueue,
            setSongQueue,

            showSongModal,
            setShowSongModal,

            hideModal,
            setHideModal
        }}>
            <Header />
            <main className="flex w-full">
                {
                    currentSongIndex > -1 && !globalContext?.hideSidebar &&
                    <div
                        onClick={() => globalContext?.setHideSidebar((prev) => !prev)}
                        className="lg:hidden opacity-[0.5] w-full h-screen fixed bg-black z-10">
                    </div>
                }
                <Sidebar />
                {
                    !hideModal ?
                        <div className="w-full h-[90vh] overflow-y-hidden">
                            <SongModal />
                        </div> :
                        <div className="px-5 sm:px-10 lg:px-20 pb-20 w-full flex flex-col justify-start gap-y-8 md:gap-y-14 relative">
                            <div
                                className="absolute w-1/2 h-[15%] left-0 top-0 -z-10
                                bg-gradient-to-br from-green-700 to-black opacity-[0.2] blur-2xl ">
                            </div>
                            <Topics />
                            <AlbumCarousel />
                            <SongCarousel />
                            <VideoCarousel />
                            <FavArtists />
                        </div>
                }
                {
                    currentSongIndex > -1 &&
                    <Player song={currentSong} />
                }
            </main>
        </SongContext.Provider>
    )
}

export default App