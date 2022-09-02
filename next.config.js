const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['coding-challenge-api.aerolab.co'],
  },
  webpack: (config, {isServer, dev}) => {
    if (!isServer && dev) {
      config.optimization.minimize = false;
      delete config.optimization.minimizer;
      config.target = ['web', 'es2020'];
    }

    return config;
  },
};

if (!isProd) {
  nextConfig.experimental = {
    legacyBrowsers: false,
    browsersListForSwc: true,
  };
}

module.exports = nextConfig;
