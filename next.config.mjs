/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['assets.shortpedia.com'],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
