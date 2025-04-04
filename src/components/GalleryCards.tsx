"use client"

import { useGallery } from "@/lib/hooks/useGallery"
import { Box, Container } from "@chakra-ui/react"
import React, { useState } from "react"
import GalleryCard from "./GalleryCard"

export default function GalleryCards() {
    const { paintings, isLoading, totalPages } = useGallery()

    return (
        <Container paddingInline='20px' lg={{ paddingInline: "100px" }}>
            <Box
                marginTop='20px'
                display='flex'
                flexWrap='wrap'
                justifyContent='center'
                gap='20px'
                md={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                }}
                xl={{
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                }}
            >
                {paintings.map((painting) => (
                    <GalleryCard key={painting.id} props={painting} />
                ))}
            </Box>
        </Container>
    )
}
