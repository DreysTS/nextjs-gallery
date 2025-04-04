import { IGalleryCardProps } from "@/types/IGalleryCardProps"
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import NextImage from "next/image"
import React, { useState } from "react"

export default function GalleryCard({ props }: { props: IGalleryCardProps }) {
    const [failedImages, setFailedImages] = useState<Record<number, boolean>>(
        {},
    )

    const handleImageError = (id: number) => {
        setFailedImages((prev) => ({ ...prev, [id]: true }))
    }

    return (
        <Box
            position='relative'
            overflow='hidden'
            backgroundColor='bg'
            width={{ base: "280px", md: "352px", xl: "392px" }}
            height={{ base: "185px", md: "220px", xl: "260px" }}
            justifySelf='center'
            className='group'
        >
            <Image
                objectFit='cover'
                display='block'
                transitionProperty='transform'
                transitionDuration='0.3s'
                width='100%'
                height='100%'
                _groupHover={{ transform: "scale(1.05)" }}
                asChild
            >
                <NextImage
                    src={props.imageUrl}
                    alt={props.name}
                    width={1920}
                    height={1080}
                    onError={() => handleImageError(props.id)}
                />
            </Image>
            <Box
                position='absolute'
                bottom='0'
                left='0'
                width={{ base: "236px", md: "300px" }}
                height={{ base: "45px", md: "66px", xl: "82px" }}
                display='flex'
                alignItems='center'
                overflow='hidden'
                backgroundColor='bg'
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
                >
                    <Box
                        position='absolute'
                        height='100%'
                        marginLeft={{ base: "12px", xl: "20px" }}
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                        transitionProperty='transform'
                        transitionDuration='0.3s'
                        _groupHover={{ transform: "translateY(200%)" }}
                    >
                        <Heading
                            color='text'
                            fontFamily='var(--font-cormorant-sc)'
                            lineHeight='19.38px'
                            size={{ base: "xs", md: "md" }}
                        >
                            {props.name}
                        </Heading>
                        <Text
                            fontFamily='var(--font-inter)'
                            color='accent'
                            fontSize='8px'
                            lineHeight='9.68px'
                            fontWeight='700'
                            md={{
                                fontSize: "12px",
                                lineHeight: "14.52px",
                            }}
                        >
                            {props.created}
                        </Text>
                    </Box>
                    <Box
                        position='absolute'
                        height='100%'
                        marginLeft={{ base: "12px", xl: "20px" }}
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                        transitionProperty='transform'
                        transitionDuration='0.3s'
                        transform='translateX(-120%)'
                        _groupHover={{ transform: "translateX(0)" }}
                    >
                        <Heading
                            color='text'
                            fontFamily='var(--font-cormorant-sc)'
                            lineHeight='19.38px'
                            size={{ base: "xs", md: "md" }}
                        >
                            {props.author}
                        </Heading>
                        <Text
                            fontFamily='var(--font-inter)'
                            color='accent'
                            fontSize='8px'
                            lineHeight='9.68px'
                            fontWeight='700'
                            md={{
                                fontSize: "12px",
                                lineHeight: "14.52px",
                            }}
                        >
                            {props.location}
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
