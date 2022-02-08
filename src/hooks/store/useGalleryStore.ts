import { useContext } from "react";
import { GalleryContext } from "../../store/gallery/GalleryContext";
const useGalleryStore = ()=>{
    return useContext(GalleryContext)
}

export default useGalleryStore