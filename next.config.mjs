/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                port: '',
            },{
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            }
        ]
    },
    experimental: {
        serverActions: {
          bodySizeLimit: '20mb',
        },
    },
};

export default nextConfig;
