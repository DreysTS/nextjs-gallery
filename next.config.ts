import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "test-front.framework.team",
                pathname: "/images/**",
            },
        ],
    },
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
}

export default nextConfig
