import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // ✅ ADD THIS LINE (VERY IMPORTANT)

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png"],

  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core"
    ],
  },

  build: {
    assetsInlineLimit: 0,
  }
}));