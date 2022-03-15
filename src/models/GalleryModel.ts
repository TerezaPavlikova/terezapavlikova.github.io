export interface GalleryModel {
        url: string
    type: GalleryModelType
    orientation: GalleryItemOrientation
}

export const enum GalleryModelType{
     ALL=0,
     VEKTOR=1,
     RASTER=2,
     
}
export const enum GalleryItemOrientation{
    PORTRAIT=0,
    LANDSCAPE=1,
    PANORAMA=2,
}