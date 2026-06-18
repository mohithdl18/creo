/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    qualities: [75, 100],
  },
  devIndicators: false,
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   devIndicators: false,

//   images: {
//     unoptimized: true,
//     qualities: [75, 100],
//   },

//   basePath: "/creo",
//   assetPrefix: "/creo",
// };

// export default nextConfig;