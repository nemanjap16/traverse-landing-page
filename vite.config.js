import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },
  publicDir: path.resolve(__dirname, "public"),
});
