/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'eu-central-1.storage.xata.sh',
			},
		],
	},
};

export default nextConfig;
