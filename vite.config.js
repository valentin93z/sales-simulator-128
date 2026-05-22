import { defineConfig } from "vite";

export default defineConfig({
  base: "/sales-simulator-128/",
  build: {
    minify: "terser",
  },
});