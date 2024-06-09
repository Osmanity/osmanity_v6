
/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  images: {
    domains: ["utfs.io", "images.unsplash.com","img.clerk.com", "flowbite.s3.amazonaws.com"],
  },
};

// module.exports = withContentlayer(nextConfig);
module.exports = withContentlayer({...nextConfig});
