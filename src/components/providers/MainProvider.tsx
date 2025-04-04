'use client'

import React from "react"
import GalleryProvider from "./GalleryProvider"
import { ChakraUiProvider } from "./ChakraUiProvider"

export default function MainProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <GalleryProvider>
            <ChakraUiProvider>{children}</ChakraUiProvider>
        </GalleryProvider>
    )
}
