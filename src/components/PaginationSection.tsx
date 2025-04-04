"use client"

import { useGallery } from "@/lib/hooks/useGallery"
import {
    ButtonGroup,
    Container,
    IconButton,
    Pagination,
} from "@chakra-ui/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export function PaginationSection() {
    const { totalPages } = useGallery()
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const pageParam = searchParams.get("page")
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1

    const handlePageChange = (nextPage: number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", String(nextPage))
        router.replace(`${pathname}?${params.toString()}`)
    }

    return (
        <Container
            display='flex'
            justifyContent='center'
            marginTop={{ base: "32px", md: "40px" }}
        >
            <Pagination.Root
                count={totalPages}
                pageSize={1}
                defaultPage={currentPage}
            >
                <ButtonGroup variant='plain' size='sm'>
                    <Pagination.PrevTrigger asChild>
                        <IconButton
                            border={0}
                            color='pagination'
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            <LuChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    <Pagination.Items
                        render={(page: any) => (
                            <IconButton
                                onClick={() => handlePageChange(page.value)}
                                border={0}
                                color='pagination'
                            >
                                {page.value}
                            </IconButton>
                        )}
                    />

                    <Pagination.NextTrigger asChild>
                        <IconButton
                            border={0}
                            color='pagination'
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            <LuChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </Container>
    )
}
