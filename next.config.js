/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // GitHub Pages usually requires a basePath if not using a custom domain or user/org site.
  // Since this is 'itsyashk.github.io' (User Site), basePath is usually not needed.
  // keeping it empty for now.
  basePath: "", 
};

module.exports = nextConfig;
