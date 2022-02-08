import { GalleryModel } from "../../../models/GalleryModel";
import { DispatchType } from "../../../utils/types";
import { GalleryState } from "../GalleryStore";


export type GalleryMutations=DispatchType<typeof setGallery>;
export const setGallery=(gallery:GalleryModel[])=>({
    type: 'set-gallery',
    gallery
}as const)

export function galleryReducer (state: GalleryState, mutation: GalleryMutations): GalleryState {
switch(mutation.type){
case 'set-gallery':
    return{...state,gallery:mutation.gallery}



    default:
        return state
}
}