/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	//assetPrefix: 'https://wiest.world/react'
  basePath: '/react',
  images: {
	  domains: ['wiest.world'],
  }
}

module.exports = nextConfig
