import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "Xavier Tech Byte Society",
        short_name: "XTB",
        description: "Tech community app for events and opportunities",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",   // ✅ ONLY THIS
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",   // ✅ ONLY THIS
          },
        ],
      },
    }),
  ],
});
