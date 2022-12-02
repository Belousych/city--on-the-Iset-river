const SERVER_URL = process.env.SERVER_URL || "https://iset-city-admin-production.up.railway.app";

module.exports = {
  reactStrictMode: true,

  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/admin/",
        destination: `${SERVER_URL}/admin`,
        permanent: true,
      },
    ];
  },

  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com"],
  },
  publicRuntimeConfig: {
    SERVER_URL,
  },
};
