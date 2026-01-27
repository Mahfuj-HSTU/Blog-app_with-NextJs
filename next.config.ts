import type { NextConfig } from 'next'
import './src/env'
const nextConfig: NextConfig = {
	/* config options here */
}
module.exports = {
	images: {
		remotePatterns: [
			new URL(
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ImIpHRSCUDgHtX12y60XeXK0TAjwBuL4bp6-czoyzDLUFDQZIHMCuvXf18JSkERgNUI&usqp=CAU'
			)
		]
	}
}

export default nextConfig
