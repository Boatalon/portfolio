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
    // Fix for @tensorflow/tfjs node.js dependencies in browser
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
