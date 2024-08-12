import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: [
      "tests/unit-tests/*.(spec|test).(ts|tsx)",
      "tests/unit-tests/**/*.(spec|test).(ts|tsx)",
    ],
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules/", "dist/", "tests/"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "dist/",
        "tests/",
        ".next/",
        "next-env.d.ts",
        "*.config.ts",
        "*.config.mjs",
        "**/layout.tsx",
        "**/constants.ts",
        "**/definitions.ts",
        "**/loading.tsx",
      ],
    },
  },
});
