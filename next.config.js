module.exports = {
  reactStrictMode: true,

  trailingSlash: true,

  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // async rewrites() {
  //     return [
  //         {
  //             source: "/api/:path*",
  //             destination: `${RIDERO_SERVER_API_URL}/:path*`,
  //             basePath: false,
  //         },
  //     ];
  // },
  publicRuntimeConfig: {},
};
