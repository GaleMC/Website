import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        { find: /^lucide-svelte$/, replacement: "/src/lib/lucide-compat.ts" },
      ],
      noExternal: ["@lucide/svelte", "lucide-svelte"],
    },
    css: {
      transformer: "postcss",
    },
  },
});
