export interface GalleryModel {
    id: number
    title: string
    url: string
    type: GalleryModelType
}

export const enum GalleryModelType{
    RASTER=0,
    VEKTOR=1,
}
