/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                path: false,
                os: false,
                crypto: false,
            };
        }
        return config;
    },
    experimental: {
        turbopack: {
            resolveFallback: {
                fs: false,
                path: false,
                os: false,
                crypto: false,
            },
        },
    },
};

module.exports = nextConfig
