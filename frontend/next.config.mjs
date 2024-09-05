// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      // Enable middleware support
      middleware: true,
    },
    // Define path matchers if needed
    matcher: ['/login*', '/profile/:path*'],
  };
  
  export default nextConfig;
  