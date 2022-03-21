/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GA_ID: process.env.GA_ID,
    PH_API_KEY: process.env.PH_API_KEY,
    PH_API_SECRET: process.env.PH_API_SECRET,
    PH_REDIRECT_URL: process.env.PH_REDIRECT_URL,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
}

module.exports = nextConfig
