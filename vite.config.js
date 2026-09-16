import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Native fs.watch on Windows dies with EBUSY when a file is locked
      // (OneDrive, antivirus, or another editor). Polling keeps the server up.
      usePolling: true,
      interval: 1000,
      ignorePermissionErrors: true,
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/engine/**", "src/lib/**"],
      thresholds: {
        lines: 80,
        functions: 80,
        statements: 80,
        branches: 70,
      },
    },
  },
});
