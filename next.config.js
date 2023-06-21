/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	distDir: 'dist',
  images: {
		domains: ['picsum.photos'],
	},
}

module.exports = nextConfig
