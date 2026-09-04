/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    turbopack: {},
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
        config.resolve.alias = {
            ...config.resolve.alias,
        };
        return config;
    },
};

module.exports = nextConfig
