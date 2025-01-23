import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// export default defineConfig(({ mode, command, isSsrBuild, isPreview}) => {
export default defineConfig({
  base: process.env.BASE_URL || "/", // for GitHub Pages
  plugins: [react(), tailwindcss()],
});
