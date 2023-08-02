import { defineConfig } from "vite";
import { resolve } from "path";

// Build:
// for t in red blue; do target=$t npx vite build; done

const builds = {
  red: {
    input: "./src/main-red.ts",
    output: "red-out.js",
    name: "Red",
  },
  blue: {
    input: "./src/main-blue.ts",
    output: "blue-out.js",
    name: "Blue",
  },
};

const { target } = process.env;
const { input, output, name } = builds[target];

export default defineConfig({
  build: {
    emptyOutDir: false,
    target: "ios12",
    lib: {
      entry: resolve(__dirname, input),
      name,
      fileName: () => output,
      formats: ["iife"],
    },
  },
});
