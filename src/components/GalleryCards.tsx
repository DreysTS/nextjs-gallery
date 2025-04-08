"use client"

import { useGallery } from "@/lib/hooks/useGallery"
import { Box, Container, Text } from "@chakra-ui/react"
import React from "react"
import GalleryCard from "./GalleryCard"
import GalleryError from "./GalleryError"
import { useSearchParams } from "next/navigation"

export default function GalleryCards() {
    const searchParams = useSearchParams()

    const { paintings, isLoading } = useGallery()

    if (isLoading)
        return (
            <Text
                marginTop='60px'
                md={{ textAlign: "center" }}
                fontFamily='var(--font-inter)'
                color='text'
            >
                Loading...
            </Text>
        )
    if (!paintings || paintings.length === 0)
        return <GalleryError query={searchParams.get("query")?.toString()} />

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
