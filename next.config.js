/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_PH_ACCESS_TOKEN: process.env.NEXT_PUBLIC_PH_ACCESS_TOKEN,
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  images: {
    domains:["ph-files.imgix.net", "ph-avatars.imgix.net"]
  }
}

module.exports = nextTranslate(nextConfig)
