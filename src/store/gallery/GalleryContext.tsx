import React,{createContext, useCallback, useReducer} from "react";
import { GalleryStore, initialStore } from "./GalleryStore";
import { initActions } from "./structure/actions";
import { galleryReducer } from "./structure/reducer";
import { getters } from "./structure/getters";


export const GalleryContext = createContext<GalleryStore>(initialStore)
export const GalleryContextProvider: React.FC=(props)=>{
    const [state,commit] = useReducer(galleryReducer, initialStore.state)
    const memoActions=useCallback (initActions(commit),[commit] )
    const store: GalleryStore = {
        state,
        getters:getters(state),
        actions: { dispatch:memoActions},
        mutations: {commit}
    }
    return (<GalleryContext.Provider value={store}>
        {props.children}
        </GalleryContext.Provider>
        )
}