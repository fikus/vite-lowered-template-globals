import { defineConfig } from "vite";
import { resolve } from "path";

// Build:
// for t in red blue; do target=$t npx vite build; done

const builds = {
  red: {
    input: "./src/main-red.ts",
    output: "red-out",
  },
  blue: {
    input: "./src/main-blue.ts",
    output: "blue-out",
  },
};

const target = process.env.target;
const { input, output } = builds[target];

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, input),
      name: target,
      fileName: () => `${output}.js`,
      formats: ["iife"],
    },
    target: "ios12",
  },
});
