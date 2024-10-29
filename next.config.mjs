/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["alpha-ca.cocone.jp"],
  },
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
