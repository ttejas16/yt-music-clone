import { useContext } from "react";
import songContext from "@/utils/songContext";

function useSongContext() {
    return useContext(songContext);
}

export default useSongContext;