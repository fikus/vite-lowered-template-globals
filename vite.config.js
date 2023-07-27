import { defineConfig } from "vite";

// Build:
// for t in red blue; do target=$t npx vite build; done

const builds = {
  red: {
    input: "./src/main-red.ts",
    output: "red-out.js",
  },
  blue: {
    input: "./src/main-blue.ts",
    output: "blue-out.js",
  },
};

const { input, output } = builds[process.env.target];

export default defineConfig({
  build: {
    emptyOutDir: false,
    target: "ios12",
    rollupOptions: {
      input,
      output: [
        {
          format: "iife",
          entryFileNames: output,
        },
      ],
    },
  },
});
