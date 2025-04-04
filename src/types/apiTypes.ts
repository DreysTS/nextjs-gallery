export interface Author {
    id: number
    name: string
}

export interface Location {
    id: number
    location: string
}

export interface Painting {
    id: number
    name: string
    authorId: number
    locationId: number
    created: string
    imageUrl: string
}

export interface PaintingsResponse {
    data: Painting[]
    totalCount: number
}
