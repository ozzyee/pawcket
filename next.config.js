/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
   reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = withPWA({
   pwa: {
      dest: "public",
      register: true,
   },
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
 })
 module.exports = withBundleAnalyzer({})