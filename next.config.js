/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')

const nextConfig = {
  reactStrictMode: true,
  env: {
    PH_ACCESS_TOKEN: process.env.PH_ACCESS_TOKEN,
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  images: {
    domains:["ph-files.imgix.net", "ph-avatars.imgix.net"]
  }
}

module.exports = nextTranslate(nextConfig)
