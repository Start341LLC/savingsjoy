import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          // Core React — loaded on every page, keep together
          if (id.includes('react-dom') || id.includes('/react/')) return 'vendor-react';
          // All Radix UI primitives into one cacheable chunk
          if (id.includes('@radix-ui')) return 'vendor-radix';
          // TanStack Query
          if (id.includes('@tanstack')) return 'vendor-query';
          // Icon libraries — tree-shaken but still large when bundled together
          if (id.includes('lucide-react') || id.includes('react-icons')) return 'vendor-icons';
          // Chart/dataviz (recharts + d3 transitive deps) — only used on chart pages
          if (id.includes('recharts') || id.includes('/d3-')) return 'vendor-charts';
          // Animation library — split so pages that don't animate pay no cost
          if (id.includes('framer-motion')) return 'vendor-motion';
          // Everything else (wouter, clsx, zod, date-fns, embla, etc.)
          return 'vendor-misc';
        },
      },
    },
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
