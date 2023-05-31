/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['img.freepik.com']
    }
}

module.exports = nextConfig
