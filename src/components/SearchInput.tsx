"use client"

import { Box, Container, Input } from "@chakra-ui/react"
import React from "react"
import { InputGroup } from "./ui/input-group"
import SearchIcon from "./icons/SearchIcon"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { debounce } from "@/lib/utils/debounce"

export default function SearchInput() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const handleSearch = debounce((term) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", "1")
        if (term) {
            params.set("query", term)
        } else {
            params.delete("query")
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <Box mt='44px'>
            <Container
                paddingInline='20px'
                lg={{ paddingInline: "100px" }}
                display={"flex"}
            >
                <InputGroup
                    flex='1'
                    maxWidth='340px'
                    marginLeft='auto'
                    startElement={<SearchIcon />}
                >
                    <Input
                        size='sm'
                        fontFamily='var(--font-inter)'
                        color='search'
                        fontSize='14px'
                        lineHeight='140%'
                        backgroundColor='search.background'
                        borderColor='search.border'
                        placeholder='Painting title'
                        paddingLeft='48px!important'
                        _focus={{ borderColor: "search" }}
                        _placeholder={{
                            color: "search.placehoder",
                            fontWeight: "300",
                            fontSize: "14px",
                            fontFamily: "var(--font-inter)",
                        }}
                        onChange={(e) => {
                            handleSearch(e.target.value)
                        }}
                        defaultValue={searchParams.get("query")?.toString()}
                    />
                </InputGroup>
            </Container>
        </Box>
    )
}
