import { configureStore } from "@reduxjs/toolkit"
import { galleryApi } from "./apiGallery"

export const galleryStore = configureStore({
    reducer: {
        [galleryApi.reducerPath]: galleryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(galleryApi.middleware),
})

export type RootState = ReturnType<typeof galleryStore.getState>
export type AppDispatch = typeof galleryStore.dispatch
