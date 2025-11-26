// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { readFile } from "node:fs/promises";

const pkg = JSON.parse(await readFile("./package.json", "utf-8"));

const NAME = pkg.name;
const VERSION = pkg.version;

// https://astro.build/config
export default defineConfig({
  base: `/${NAME}/${VERSION}`,
  server: {
    host: true,
  },
  site: process.env.ASTRO_SITE || "http://localhost:4321",
  vite: {
    // @ts-ignore - Tailwind v4の@tailwindcss/viteプラグインとAstro内部のVite型に互換性の問題がありますが、実行時には問題なく動作します
    plugins: [tailwindcss()],
  },
});
