import App from './App.vue';
import router from './router';
import { createApp, Directive } from 'vue';
import { getServerConfig } from './config';
import { injectResponsiveStorage } from '/@/utils/storage/responsive';
import { initSentry } from '/@/utils/sentry';
import { usI18n } from './i18n/index';
import { setupStore } from '/@/store';
import { useElementPlus } from '../src/plugins/element-plus';
import componentRegister from './components/componentRegister';
import 'virtual:svg-icons-register';

// 导入公共样式
import './style/index.scss';

const app = createApp(App);

// 全局注册组件到vue
componentRegister(app);

// 自定义指令
import * as directives from '/@/directives';
Object.keys(directives).forEach((key) => {
    app.directive(key, (directives as { [key: string]: Directive })[key]);
});

getServerConfig(app).then(async (config) => {
    injectResponsiveStorage(app, config);
    setupStore(app);
    initSentry(app);
    app.use(router).use(useElementPlus).use(usI18n);
    await router.isReady();
    app.mount('#app');
});
