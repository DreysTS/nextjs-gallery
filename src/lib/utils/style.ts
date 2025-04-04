import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
    theme: {
        breakpoints: {
            sm: "320px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
        tokens: {
            colors: {
                primary: {
                    white: { value: "#ffffff" },
                    black: { value: "#121212" },
                    "light-gray": { value: "#dedede" },
                    "dark-gray": { value: "#575757" },
                },
                secondary: {
                    white: { value: "#fcfcfc" },
                    black: { value: "#1a1818" },
                    gray: { value: "#9c9c9c" },
                },
                accent: {
                    red: { value: "#9b4b4b" },
                    gold: { value: "#ab8956" },
                },
            },
            fonts: {
                heading: { value: "var(--font-cormorant-sc)" },
                body: { value: "var(--font-inter)" },
            },
        },
        semanticTokens: {
            colors: {
                bg: {
                    value: {
                        base: "{colors.primary.white}",
                        _dark: "{colors.primary.black}",
                    },
                },
                text: {
                    DEFAULT: {
                        value: {
                            base: "{colors.primary.black}",
                            _dark: "{colors.primary.white}",
                        },
                    },
                    muted: {
                        value: {
                            base: "{colors.secondary.gray}",
                            _dark: "{colors.secondary.gray}",
                        },
                    },
                },
                accent: {
                    value: {
                        base: "{colors.accent.red}",
                        _dark: "{colors.accent.gold}",
                    },
                },
                "header-logo": {
                    value: {
                        base: "{colors.primary.dark-gray}",
                        _dark: "{colors.primary.light-gray}",
                    },
                },
                search: {
                    DEFAULT: {
                        value: {
                            base: "{colors.primary.dark-gray}",
                            _dark: "{colors.primary.light-gray}",
                        },
                    },
                    background: {
                        value: {
                            base: "{colors.primary.white}",
                            _dark: "{colors.secondary.black}",
                        },
                    },
                    border: {
                        value: {
                            base: "{colors.primary.light-gray}",
                            _dark: "{colors.secondary.black}",
                        },
                    },
                    placeholder: {
                        value: {
                            base: "{colors.secondary.gray}",
                            _dark: "{colors.primary.dark-gray}",
                        },
                    },
                },
                button: {
                    background: {
                        value: {
                            base: "{colors.secondary.white}",
                            _dark: "{colors.secondary.black}",
                        },
                    },
                    active: {
                        value: {
                            base: "#f3f3f3",
                            _dark: "#1b1b1b",
                        },
                    },
                    icon: {
                        value: {
                            base: "{colors.primary.black}",
                            _dark: "{colors.primary.light-gray}",
                        },
                    },
                },
                pagination: {
                    DEFAULT: {
                        value: {
                            base: "{colors.primary.dark-gray}",
                            _dark: "{colors.primary.light-gray}",
                        },
                    },
                    underline: {
                        value: {
                            base: "{colors.secondary.gray}",
                            _dark: "{colors.primary.dark-gray}",
                        },
                    },
                    active: {
                        value: {
                            base: "rgba(87, 87, 87, 0.05)",
                            _dark: "{colors.secondary.black}",
                        },
                    },
                },
            },
        },
    },
})

export const system = createSystem(defaultConfig, config)
