import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import elementEnLocale from 'element-plus/lib/locale/lang/en';
import elementZhLocale from 'element-plus/lib/locale/lang/zh-cn';
import enELUS from './en-US';
import zhELCN from './zh-CN';
const messages = {
    zhCN: {
        ...elementZhLocale,
        ...zhELCN
    },
    enUS: {
        ...elementEnLocale,
        ...enELUS
    }
};
const i18n = createI18n({
    locale: localStorage.getItem('LANG') || 'zhCN',
    messages: messages
});

export const $t = (key: string) => key;

export function usI18n(app: App) {
    app.use(i18n);
}

export default usI18n;
