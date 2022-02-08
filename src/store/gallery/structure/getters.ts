import { GalleryState } from "../GalleryStore";
import { GalleryModel } from "../../../models/GalleryModel";

export interface GalleryGetters {
    getAll: ()=> GalleryModel[]

}

export const getters=(state: Readonly<GalleryState>): GalleryGetters=> {
    return{
        getAll: ()=>{
            return state.gallery
        }
    }
}