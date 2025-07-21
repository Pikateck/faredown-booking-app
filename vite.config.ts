import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server"; // Make sure this exists

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",        // for IPv6 and all interfaces
    port: 8080,        // standard dev port
  },
  build: {
    outDir: "dist/spa", // for production client build
    emptyOutDir: true,  // clean output dir before build
  },
  plugins: [
    react(),
    expressPlugin(),    // attaches Express backend to dev server
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

// Express plugin to hook into Vite's dev server
function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer(); // should return an Express app
      server.middlewares.use(app);
    },
  };
}
