/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase timeout for static generation
  staticPageGenerationTimeout: 300,
  
  // Optimize build
  swcMinify: true,
  
  // Configure output
  output: 'standalone',
}

export default nextConfig
