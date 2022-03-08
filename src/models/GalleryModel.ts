export interface GalleryModel {
        url: string
    type: GalleryModelType
    orientation: GalleryItemOrientation
}

export const enum GalleryModelType{
    RASTER=0,
    VEKTOR=1,
}
export const enum GalleryItemOrientation{
    PORTRAIT=0,
    LANDSCAPE=1,
    PANORAMA=2,
}