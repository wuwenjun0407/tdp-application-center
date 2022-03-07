import { toRouteType } from './types';
import { routes, remainingPaths } from './modules';
import NProgress from '/@/utils/progress';
import { Router, createRouter, createWebHashHistory } from 'vue-router';

// 创建路由实例
export const router: Router = createRouter({
    history: createWebHashHistory(''),
    routes: routes.concat(...remainingPaths),
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        // eslint-disable-next-line consistent-return
        return new Promise((resolve) => {
            if (savedPosition) {
                return savedPosition;
            } else {
                if (from.meta.saveSrollTop) {
                    const top: number = document.documentElement.scrollTop || document.body.scrollTop;
                    resolve({ left: 0, top });
                }
            }
        });
    }
});

router.beforeEach((to: toRouteType, _from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;
