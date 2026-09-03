/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
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
        // Allow onnxruntime-web to load its WASM binaries
        config.resolve.alias = {
            ...config.resolve.alias,
        };
        return config;
    },
};

module.exports = nextConfig
