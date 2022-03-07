# TDP application template

-   该模板可以帮助您快速搭建基于 Vue 的高可用，高效率，高规范的应用，缩短开发周期并提升开发效率。

## 主要技术栈

**[Vue 3](https://v3.cn.vuejs.org/) + [Typescript](https://www.tslang.cn/) + [Vite](https://vitejs.cn/) + [Pinia](https://pinia.vuejs.org/) + [Axiso](http://www.axios-js.com/)**

-   该模板应该可以帮助你开始在 [Vite](https://vitejs.cn/) 中使用 [Vue 3](https://v3.cn.vuejs.org/) 和 [Typescript](https://www.tslang.cn/) 进行开发。
-   [Pinia](https://pinia.vuejs.org/)代替了 vuex。
-   该模板使用 Vue 3 `<script setup>` SFCs，查看 [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 学习 更多的

## 推荐的 IDE 设置

-   [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) + [Stylelint](https://stylelint.docschina.org/) + [Prettier](https://prettier.io/)

## 安装使用

-   获取项目代码

```
git clone http://gitlab.xpaas.lenovo.com/tdp/bct/bct-web.git

```

> **该项目使用 pnpm 软件包管理器(请先安装 pnpm)**

-   安装依赖

```
cd tdp-application-center

pnpm install

```

-   运行

```
pnpm serve

```

-   打包

```
pnpm build

```

-   预览构建应用

```
pnpm preview

```

## Git Hooks

> git commit 阶段会经过多种 lint 检查，注意你提交的代码是否符合 lint 规则。（详情请查看 package.json）
