import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import { ALL_DAYS } from './src/data';

/**
 * Plugin to generate static JSON endpoints and physical HTML pages for GitHub Pages
 */
const staticApiPlugin = () => ({
  name: 'static-api-generator',
  writeBundle() {
    const distDirectory = path.resolve(__dirname, 'dist');
    const apiDirectory = path.join(distDirectory, 'api');

    if (!fs.existsSync(apiDirectory)) {
      fs.mkdirSync(apiDirectory, { recursive: true });
    }

    // 1. Generate static JSON endpoints
    fs.writeFileSync(
      path.join(apiDirectory, 'challenges.json'),
      JSON.stringify({ success: true, data: ALL_DAYS }, undefined, 2)
    );

    const days2026 = ALL_DAYS.filter((day) => day.year === 2026);
    fs.writeFileSync(
      path.join(apiDirectory, '2026.json'),
      JSON.stringify({ success: true, data: days2026 }, undefined, 2)
    );

    // 2. Generate physical index.html files for all routes to prevent 404 errors on GitHub Pages
    const indexPath = path.join(distDirectory, 'index.html');
    if (fs.existsSync(indexPath)) {
      const indexHtmlContent = fs.readFileSync(indexPath, 'utf8');

      const uniqueYears = Array.from(new Set(ALL_DAYS.map((day) => day.year)));
      const staticRoutes = [
        ...uniqueYears.map((year) => `${year}`),
        ...ALL_DAYS.map((day) => `${day.year}/${day.slug}`),
      ];

      for (const route of staticRoutes) {
        const routeDirectory = path.join(distDirectory, route);
        if (!fs.existsSync(routeDirectory)) {
          fs.mkdirSync(routeDirectory, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDirectory, 'index.html'), indexHtmlContent);
      }
    }
  },
});

export default defineConfig({
  base: '/monthmarathone-template/',
  plugins: [staticApiPlugin()],
  build: {
    outDir: 'dist',
  },
});