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
          // React core — tiny, stable, maximally cacheable
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/')) {
            return 'vendor-react';
          }
          // All Radix UI primitives — deduplicated across lazy-loaded route chunks
          if (id.includes('/node_modules/@radix-ui/')) {
            return 'vendor-radix';
          }
          // TanStack (react-query) — needed at app boot for QueryClientProvider
          if (id.includes('/node_modules/@tanstack/')) {
            return 'vendor-query';
          }
          // Heavy libs only used in lazy-loaded pages — kept out of the main bundle
          if (id.includes('/node_modules/recharts/') || id.includes('/node_modules/d3-')) {
            return 'vendor-charts';
          }
          if (id.includes('/node_modules/embla-carousel')) {
            return 'vendor-carousel';
          }
          if (id.includes('/node_modules/react-day-picker/') || id.includes('/node_modules/date-fns/')) {
            return 'vendor-dates';
          }
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
