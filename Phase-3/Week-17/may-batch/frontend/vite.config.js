import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // we can change the default port number the appliction running on
  server: {
    port: 3000,
  },
});
