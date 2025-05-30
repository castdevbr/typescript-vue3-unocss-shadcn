import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { resolve } from "path";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]s?$/, // .ts, .js
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/, // .md
      ],
      imports: ["vue", "vue-router"],
      dts: true,
      viteOptimizeDeps: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 80,
    host: true,
  },
});
