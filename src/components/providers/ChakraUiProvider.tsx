"use client"

import { ChakraProvider } from "@chakra-ui/react"
import {
    ColorModeProvider,
    type ColorModeProviderProps,
} from "../ui/color-mode"
import { system } from "@/lib/utils/style"

export function ChakraUiProvider(props: ColorModeProviderProps) {
    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} />
        </ChakraProvider>
    )
}
