import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//  root: "/",
//  envDir: "./",
//  publicDir: "./public",
//  resolve: {
//    alias: {
//      "@": path.resolve(__dirname, "./src"),
//    },
//  },
//   build: {
//     outDir: "./dist",
//   },
})
