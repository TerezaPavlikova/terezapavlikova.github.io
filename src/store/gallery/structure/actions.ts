import { GalleryMutations } from "./reducer";
import { GalleryModel, GalleryModelType } from "../../../models/GalleryModel";
import { DispatchType } from "../../../utils/types"
import React from "react";

export type GalleryActions = DispatchType<typeof loadGallery>;
export const loadGallery = () => ({
    type: 'load-gallery'
} as const)

export const initActions = (commit: React.Dispatch<GalleryMutations>) => {
    const dispatch: React.Dispatch<GalleryActions> = async (action) => {
        switch (action.type) {
            case 'load-gallery':
                commit({
                    type: 'set-gallery', gallery: [
                        { id: 1, url: '/assets/galeria/macka.jpg', title: 'macka', type: GalleryModelType.RASTER },
                        { id: 2, url: '', title: '', type: GalleryModelType.RASTER },
                        { id: 3, url: '', title: '', type: GalleryModelType.RASTER },
                        { id: 4, url: '', title: '', type: GalleryModelType.RASTER },
                        { id: 5, url: '', title: '', type: GalleryModelType.RASTER },
                        


                    ]
                })
                break;
            default: console.log('no action taken');
                break;
        }
    }
    return dispatch
}
