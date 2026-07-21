/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Emit a fully static site into `out/` so it can be served by GitHub Pages,
  // which cannot run a Node server.
  output: 'export',

  // Next's default image optimizer needs a server at runtime; static hosting
  // must serve the original files as-is.
  images: {
    unoptimized: true,
  },

  // Emit `/the-list/index.html` rather than `/the-list.html`, so URLs resolve
  // correctly under GitHub Pages' static file serving.
  trailingSlash: true,
};

export default nextConfig;
