import { App } from 'vue';
import { router } from '/@/router/index';
import { loadEnv } from '@build/index';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';

const { VITE_IS_SENTRY, VITE_SENTRY_DNS } = loadEnv();

export const initSentry = (app: App) => {
    if (VITE_IS_SENTRY) {
        Sentry.init({
            app,
            enabled: VITE_IS_SENTRY,
            dsn: VITE_SENTRY_DNS,
            // debug: false,
            integrations: [
                new BrowserTracing({
                    routingInstrumentation: Sentry.vueRouterInstrumentation(router),
                    tracingOrigins: ['localhost', 'my-site-url.com', /^\//]
                })
            ],
            // Set tracesSampleRate to 1.0 to capture 100%
            // of transactions for performance monitoring.
            // We recommend adjusting this value in production
            tracesSampleRate: 1.0
        });
    }
};
