import { galleryStore } from "@/stores/galleryStore"
import React from "react"
import { Provider } from "react-redux"

export default function GalleryProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <Provider store={galleryStore}>{children}</Provider>
}
