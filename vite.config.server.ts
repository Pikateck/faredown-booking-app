import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    ssr: true,
    outDir: "dist/server",
    emptyOutDir: true, // Cleans output before build
    rollupOptions: {
      input: "./server/index.ts", // Confirm this file exists and is the backend entry point
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
