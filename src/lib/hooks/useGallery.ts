import { useMemo } from "react"
import {
    useGetAuthorsQuery,
    useGetLocationsQuery,
    useGetPaintingsQuery,
} from "@/stores/apiGallery"
import { useSearchParams } from "next/navigation"

export const useGallery = () => {
    const searchParams = useSearchParams()
    const pageParam = searchParams.get("page")
    const queryParam = searchParams.get("query")

    const page = pageParam ? parseInt(pageParam, 10) : 1
    const pageSize = 6
    const { data: authorsData } = useGetAuthorsQuery()
    const { data: locationsData } = useGetLocationsQuery()
    const { data: paintingsData, isLoading } = useGetPaintingsQuery({
        page,
        pageSize,
        query: queryParam || undefined,
    })

    const paintingsWithDetails = useMemo(() => {
        if (!authorsData || !locationsData || !paintingsData?.data) return []

        const authorMap = Object.fromEntries(
            authorsData.map((a) => [a.id, a.name]),
        )
        const locationMap = Object.fromEntries(
            locationsData.map((l) => [l.id, l.location]),
        )

        return paintingsData.data.map((painting) => ({
            ...painting,
            imageUrl: process.env.SERVER_URL + painting.imageUrl,
            author: authorMap[painting.authorId] || "Unknown",
            location: locationMap[painting.locationId] || "Unknown",
        }))
    }, [authorsData, locationsData, paintingsData])

    const totalPages = useMemo(() => {
        if (!paintingsData?.totalCount) return 0
        return Math.ceil(paintingsData.totalCount / pageSize)
    }, [paintingsData, pageSize])

    return {
        authors: authorsData || [],
        locations: locationsData || [],
        paintings: paintingsWithDetails,
        isLoading,
        totalPages,
        totalCount: paintingsData?.totalCount || 0,
    }
}
