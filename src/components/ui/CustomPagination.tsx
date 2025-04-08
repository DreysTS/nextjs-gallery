import React from "react"
import { chakra, ChakraProvider, Stack } from "@chakra-ui/react"
import { Paginate } from "react-paginate-chakra-ui"

export default function CustomPagination() {
    const [page, setPage] = React.useState(0)
    const handlePageClick = (p: number) => setPage(p)

    return (
        <Stack>
            <Paginate />
        </Stack>
    )
}
