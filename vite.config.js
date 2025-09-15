import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: {},
    "process.env": process.env, // injects env at build time
  },
});
