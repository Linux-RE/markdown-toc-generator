/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure base path for GitHub Pages
  // Replace 'markdown-toc-generator' with your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/markdown-toc-generator' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
