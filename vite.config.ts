import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    __DEV__: process.env.NODE_ENV === "development",
    process: {
      env: {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    },
  },
  build: {
    // outDir: "build/static/js",
    emptyOutDir: false,
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    lib: {
      entry: "./src/main.ts",
      name: "NewWidgets",
      fileName: (format) => `new-widgets.${format}.js`,
    },
  },
});
