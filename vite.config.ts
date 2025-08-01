import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript2 from 'rollup-plugin-typescript2';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"]
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content) => {
          const LF = '\n';
          const paths = [
            '@use \'sass:math\';',
            '@use \'@/shared/style/utils/_functions.scss\';',
            '@use \'@/shared/style/utils/_variables.scss\';',
          ];
          return paths.join(LF) + LF + content;
        },
      },
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/LibraryDeclaration.ts",
      formats: ["es"],
      name: "LibraryDeclaration",
      fileName: format => `vue-components-ui.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
