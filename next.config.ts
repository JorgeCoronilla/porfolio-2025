import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./src'),
      '@i18nConfig': path.resolve('./i18nConfig'),
    };

    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource', // This treats the SVG as a static asset (file path)
    });

    return config;
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
