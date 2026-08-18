import { defineConfig } from "vite";

export default defineConfig({
  base: "/sales-simulator-128/",
  build: {
    minify: "terser",
  },
  preview: {
    host: "127.0.0.1",
    port: 5173,
    allowedHosts: ["cm-education.ru", "www.cm-education.ru"],
  },
});