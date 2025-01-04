/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'i.imgur.com', 'raw.githubusercontent.com'],
    },
    staticPageGenerationTimeout: 60, // Increase to 60 seconds
};

export default nextConfig;
