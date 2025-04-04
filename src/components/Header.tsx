import { Container } from "@chakra-ui/react"
import React from "react"
import { ColorModeButton } from "./ui/color-mode"
import LogoIcon from "./icons/LogoIcon"

export default function Header() {
    return (
        <header>
            <Container
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                paddingBlock='24px'
                paddingInline='20px'
                lg={{ paddingBlock: "20px", paddingInline: "100px" }}
            >
                <LogoIcon />
                <ColorModeButton width='40px' height='40px' />
            </Container>
        </header>
    )
}
