import React from "react"
import { Box, HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react"

export default function GalleryCardSkeleton() {
    return (
        <Stack
            position='relative'
            width={{ base: "280px", md: "352px", xl: "392px" }}
            height={{ base: "185px", md: "220px", xl: "260px" }}
        >
            <Skeleton width='100%' height='100%' position='absolute'></Skeleton>
            <Box
                position='absolute'
                bottom='0'
                left='0'
                width={{ base: "236px", md: "300px" }}
                height={{ base: "45px", md: "66px", xl: "82px" }}
                display='flex'
                alignItems='center'
            >
                <Box
                    position='relative'
                    height={{ base: "29px", xl: "42px" }}
                    width='100%'
                    xl={{
                        borderLeftWidth: "1px",
                        borderLeftStyle: "solid",
                        borderLeftColor: "accent",
                    }}
                ></Box>
            </Box>
        </Stack>
    )
}
