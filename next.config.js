/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aha-labs',
  images: { unoptimized: true },
};
export default nextConfig;

module.exports = nextConfig;