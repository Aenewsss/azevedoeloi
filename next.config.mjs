/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "azevedoeloi.adv.br" },
            {
                hostname: "img.freepik.com"
            }
        ]
    }
};

export default nextConfig;
