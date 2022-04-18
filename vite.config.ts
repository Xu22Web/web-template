import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [NaiveUiResolver()], // 按需引用naive-ui
    }),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
      dts: 'src/auto-import.d.ts', // 生成 `auto-import.d.ts` 全局声明
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
      { find: 'views', replacement: '/src/views' },
      { find: 'components', replacement: '/src/components' },
      { find: 'router', replacement: '/src/router' },
      { find: 'store', replacement: '/src/store' },
    ],
  },
  server: {
    host: '0.0.0.0',
    // open: true,
    // 是否自动在浏览器打开
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.31.233:5500/api',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
});
