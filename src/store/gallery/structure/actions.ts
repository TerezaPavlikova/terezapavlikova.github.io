import { GalleryMutations } from "./reducer";
import { GalleryItemOrientation, GalleryModel, GalleryModelType } from "../../../models/GalleryModel";
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
                        { url: '/assets/galeria/raster/panda.png', type: GalleryModelType.RASTER, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/raster/duha.png', type: GalleryModelType.RASTER, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/raster/zoo.png', type: GalleryModelType.RASTER, orientation: GalleryItemOrientation.PANORAMA },
                        { url: '/assets/galeria/vektor/plameniak.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/raster/antilopy.png', type: GalleryModelType.RASTER, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/raster/jaskyna.png', type: GalleryModelType.RASTER, orientation: GalleryItemOrientation.PANORAMA },
                        { url: '/assets/galeria/raster/delfiny.png', type: GalleryModelType.RASTER, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/vektor/oposits.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/raster/hviezdy.png', type: GalleryModelType.RASTER, orientation: GalleryItemOrientation.PANORAMA },
                        { url: '/assets/galeria/vektor/jelen.png', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.PORTRAIT },
                        { url: '/assets/galeria/vektor/macka.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.PORTRAIT },
                        { url: '/assets/galeria/vektor/povolania.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.PORTRAIT },
                        { url: '/assets/galeria/vektor/jedlo.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.PORTRAIT },
                        { url: '/assets/galeria/vektor/odpad.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/vektor/muchotravky.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/vektor/cover.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.PORTRAIT },
                        { url: '/assets/galeria/vektor/zvery.png', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.PORTRAIT },
                        { url: '/assets/galeria/vektor/tavy.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/vektor/jablko.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.LANDSCAPE },
                        { url: '/assets/galeria/vektor/vtaky.jpg', type: GalleryModelType.VEKTOR, orientation: GalleryItemOrientation.PORTRAIT },
                    ]
                })
                break;
            default: console.log('no action taken');
                break;
        }
    }
    return dispatch
}
