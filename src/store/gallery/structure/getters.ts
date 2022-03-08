import { GalleryState } from "../GalleryStore";
import { GalleryModel, GalleryModelType } from "../../../models/GalleryModel";

export interface GalleryGetters {
    getAll: ()=> GalleryModel[]
getType: (type:GalleryModelType)=> GalleryModel[]
}

export const getters=(state: Readonly<GalleryState>): GalleryGetters=> {
    return{
        getAll: ()=>{
            return state.gallery
        },
        getType: (type:GalleryModelType)=>{
            return state.gallery.filter(x=>x.type===type)
        }
    }
}

