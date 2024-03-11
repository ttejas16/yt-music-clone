import React from "react";
import { Song } from "@/components/SongInterface";

type SongContextType = {
    currentSongIndex: number,
    setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>,

    songQueue: Song[] | [],
    setSongQueue: React.Dispatch<React.SetStateAction<Song[] | []>>,

    showSongModal: boolean,
    setShowSongModal: React.Dispatch<React.SetStateAction<boolean>>,

    hideModal: boolean,
    setHideModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const SongContext = React.createContext<SongContextType | null>(null)

export default SongContext;
