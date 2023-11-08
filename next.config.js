/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      fileName: true,
    },
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
