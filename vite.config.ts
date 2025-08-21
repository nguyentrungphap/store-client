import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // import path để resolve alias
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // @ đại diện cho src
      "~assets": path.resolve(__dirname, "src/assets"), // ~assets đại diện cho src/assets
    },
  },
});
