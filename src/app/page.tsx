import GalleryCards from "@/components/GalleryCards"
import Header from "@/components/Header"
import { PaginationSection } from "@/components/PaginationSection"
import SearchInput from "@/components/SearchInput"

export default function Home() {
    return (
        <>
            <Header />
            <SearchInput />
            <GalleryCards />
            <PaginationSection />
        </>
    )
}
