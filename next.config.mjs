/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "example.com"],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
  serverExternalPackages: ["@react-email/components", "@react-email/render"],
};

export default nextConfig;
