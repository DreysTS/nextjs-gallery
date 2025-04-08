import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/nextjs-gallery",
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
        unoptimized: true,
    },
    env: {
        SERVER_URL: process.env.SERVER_URL,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
