/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-astro",
    "prettier-plugin-astro-organize-imports",
    "prettier-plugin-tailwindcss"
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
export default config;