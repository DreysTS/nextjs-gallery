import { Author, Painting, PaintingsResponse, Location } from "@/types/apiTypes"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const galleryApi = createApi({
    reducerPath: "galleryApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL }),
    endpoints: (builder) => ({
        getAuthors: builder.query<Author[], void>({
            query: () => "/authors",
        }),
        getLocations: builder.query<Location[], void>({
            query: () => "/locations",
        }),
        getPaintings: builder.query<
            PaintingsResponse,
            { page: number; pageSize: number; query?: string }
        >({
            query: ({ page, pageSize, query }) => ({
                url: "/paintings",
                params: {
                    _limit: pageSize,
                    _page: page,
                    q: query || undefined,
                },
            }),
            transformResponse: (response: Painting[], meta) => {
                const totalCount =
                    Number(meta?.response?.headers.get("x-total-count")) || 0
                return { data: response, totalCount }
            },
        }),
    }),
})

export const {
    useGetAuthorsQuery,
    useGetLocationsQuery,
    useGetPaintingsQuery,
} = galleryApi
