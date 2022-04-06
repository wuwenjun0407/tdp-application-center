import vue from '@vitejs/plugin-vue';
import { loadEnv } from 'vite';
import { viteBuildInfo } from './info';
import viteVisionPlugin from 'tdp-vue3-version-plugin';
import { warpperEnv } from '../build';
import legacy from '@vitejs/plugin-legacy';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import liveReload from 'vite-plugin-live-reload';
import ElementPlus from 'unplugin-element-plus/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import removeConsole from 'vite-plugin-remove-console';
import path from 'path';

export function getPluginsList(command, mode, root, VITE_LEGACY) {
    const { VITE_STRAT_UP_MOCK } = warpperEnv(loadEnv(mode, root));
    const lifecycle = process.env.npm_lifecycle_event;
    return [
        vue(),
        // jsx、tsx语法支持
        vueJsx(),
        // 线上环境删除console
        removeConsole(),
        // 终端输出
        viteBuildInfo(),
        // 生成版本文件
        viteVisionPlugin({
            env: process.env,
            versionDirectory: '/public',
            fileName: 'version.json',
            commitShow: true
        }),
        // element-plus 手动导入
        ElementPlus(),
        // 修改layout文件夹下的文件时自动重载浏览器
        liveReload(['src/layout/**/*', 'src/router/**/*']),
        // mock支持
        viteMockServe({
            mockPath: 'mock',
            localEnabled: command === 'serve',
            prodEnabled: VITE_STRAT_UP_MOCK,
            injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
            logger: true
        }),
        // 生成svg雪碧图
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]'
        }),
        // 是否为打包后的文件提供传统浏览器兼容性支持
        VITE_LEGACY
            ? legacy({
                  targets: ['ie >= 11'],
                  additionalLegacyPolyfills: ['regenerator-runtime/runtime']
              })
            : null,
        // 打包占用依赖可视化分析
        lifecycle === 'build:visualizer' ? visualizer({ open: true, brotliSize: true, filename: 'report.html' }) : null
    ];
}
