"use client"

import { Box, Span, Text } from "@chakra-ui/react"
import React from "react"

export default function GalleryError({ query }: { query: string | undefined }) {
    return (
        <Box
            marginTop='60px'
            md={{ textAlign: "center" }}
            fontFamily='var(--font-inter)'
        >
            <Text
                color='text'
                marginBottom='12px'
                fontSize='16px'
                lineHeight='22.4px'
            >
                No matches for <Span fontWeight='500'>{query}</Span>
            </Text>
            <Text color='text.muted'>
                Please try again with a different spelling or keywords.
            </Text>
        </Box>
    )
}
