import type { NextConfig } from "next";
const { i18n } = require('./next-18i.config');

const nextConfig: NextConfig = {
  reactCompiler: true,
  // CSS modules are enabled by default in Next.js with Turbopack
};

// module.exports = {
//   i18n,
//   reactStrictMode: true,
// };


export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ['en', 'ar'],
//     defaultLocale: 'en',
//   }
// }

// module.exports = nextConfig