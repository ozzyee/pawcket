/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   test: /\.svg$/,
   use: ["@svgr/webpack"],
};

module.exports = nextConfig;
