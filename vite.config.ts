import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Increase the inline limit so images are NEVER inlined as base64
    // — they always get copied as real files into dist/assets/
    assetsInlineLimit: 0,
    // Make sure the assets folder is named consistently
    assetsDir: "assets",
    rollupOptions: {
      output: {
        // Keep asset file names readable for debugging
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});