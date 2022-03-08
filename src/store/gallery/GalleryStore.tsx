import { GalleryModel, GalleryModelType } from "../../models/GalleryModel";
import { GalleryActions } from "./structure/actions";
import { GalleryGetters } from "./structure/getters";
import { GalleryMutations } from "./structure/reducer";


export interface GalleryState {
    gallery: GalleryModel[]
}

export interface GalleryStore {
    state: Readonly<GalleryState>
    getters: GalleryGetters
    actions: {
        dispatch: React.Dispatch<GalleryActions>
    }
    mutations: {
        commit: React.Dispatch<GalleryMutations>
    }
}

export const initialStore: GalleryStore = {
    state: {
        gallery: []
    } as GalleryState,
    getters: {
        getAll: ()=> [],
        getType: (type:GalleryModelType)=> []

    },
    mutations: {
        commit: () => { }
    },
    actions: {
        dispatch: () => { }
    }
}